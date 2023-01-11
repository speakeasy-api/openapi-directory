package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCustomKeyStoreRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudHsmClusterId")
    public String cloudHsmClusterId;
    public UpdateCustomKeyStoreRequest withCloudHsmClusterId(String cloudHsmClusterId) {
        this.cloudHsmClusterId = cloudHsmClusterId;
        return this;
    }
    @JsonProperty("CustomKeyStoreId")
    public String customKeyStoreId;
    public UpdateCustomKeyStoreRequest withCustomKeyStoreId(String customKeyStoreId) {
        this.customKeyStoreId = customKeyStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyStorePassword")
    public String keyStorePassword;
    public UpdateCustomKeyStoreRequest withKeyStorePassword(String keyStorePassword) {
        this.keyStorePassword = keyStorePassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NewCustomKeyStoreName")
    public String newCustomKeyStoreName;
    public UpdateCustomKeyStoreRequest withNewCustomKeyStoreName(String newCustomKeyStoreName) {
        this.newCustomKeyStoreName = newCustomKeyStoreName;
        return this;
    }
}