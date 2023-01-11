package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionPasswordEncryption
 * <p>The data structure used by the Data Catalog to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p> <p>When a <code>CreationConnection</code> request arrives containing a password, the Data Catalog first encrypts the password using your KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.</p> <p>This encryption requires that you set KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.</p>
**/
public class ConnectionPasswordEncryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsKmsKeyId")
    public String awsKmsKeyId;
    public ConnectionPasswordEncryption withAwsKmsKeyId(String awsKmsKeyId) {
        this.awsKmsKeyId = awsKmsKeyId;
        return this;
    }
    @JsonProperty("ReturnConnectionPasswordEncrypted")
    public Boolean returnConnectionPasswordEncrypted;
    public ConnectionPasswordEncryption withReturnConnectionPasswordEncrypted(Boolean returnConnectionPasswordEncrypted) {
        this.returnConnectionPasswordEncrypted = returnConnectionPasswordEncrypted;
        return this;
    }
}