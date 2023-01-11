package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Credentials
 * Credentials for the provided identity ID.
**/
public class Credentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessKeyId")
    public String accessKeyId;
    public Credentials withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Expiration")
    public OffsetDateTime expiration;
    public Credentials withExpiration(OffsetDateTime expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretKey")
    public String secretKey;
    public Credentials withSecretKey(String secretKey) {
        this.secretKey = secretKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SessionToken")
    public String sessionToken;
    public Credentials withSessionToken(String sessionToken) {
        this.sessionToken = sessionToken;
        return this;
    }
}