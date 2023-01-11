package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateEncryptionConfigRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public AssociateEncryptionConfigRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("encryptionConfig")
    public openapisdk.models.shared.EncryptionConfig[] encryptionConfig;
    public AssociateEncryptionConfigRequestBody withEncryptionConfig(openapisdk.models.shared.EncryptionConfig[] encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
}