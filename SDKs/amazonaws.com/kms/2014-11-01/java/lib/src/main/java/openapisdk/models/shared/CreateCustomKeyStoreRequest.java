package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCustomKeyStoreRequest {
    @JsonProperty("CloudHsmClusterId")
    public String cloudHsmClusterId;
    public CreateCustomKeyStoreRequest withCloudHsmClusterId(String cloudHsmClusterId) {
        this.cloudHsmClusterId = cloudHsmClusterId;
        return this;
    }
    @JsonProperty("CustomKeyStoreName")
    public String customKeyStoreName;
    public CreateCustomKeyStoreRequest withCustomKeyStoreName(String customKeyStoreName) {
        this.customKeyStoreName = customKeyStoreName;
        return this;
    }
    @JsonProperty("KeyStorePassword")
    public String keyStorePassword;
    public CreateCustomKeyStoreRequest withKeyStorePassword(String keyStorePassword) {
        this.keyStorePassword = keyStorePassword;
        return this;
    }
    @JsonProperty("TrustAnchorCertificate")
    public String trustAnchorCertificate;
    public CreateCustomKeyStoreRequest withTrustAnchorCertificate(String trustAnchorCertificate) {
        this.trustAnchorCertificate = trustAnchorCertificate;
        return this;
    }
}