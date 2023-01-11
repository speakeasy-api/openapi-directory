package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServerSideEncryption
 * Provides information about the server-side encryption settings for an S3 bucket or S3 object.
**/
public class ServerSideEncryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionType")
    public EncryptionTypeEnum encryptionType;
    public ServerSideEncryption withEncryptionType(EncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsMasterKeyId")
    public String kmsMasterKeyId;
    public ServerSideEncryption withKmsMasterKeyId(String kmsMasterKeyId) {
        this.kmsMasterKeyId = kmsMasterKeyId;
        return this;
    }
}