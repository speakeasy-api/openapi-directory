package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisconnectCustomKeyStoreRequest {
    @JsonProperty("CustomKeyStoreId")
    public String customKeyStoreId;
    public DisconnectCustomKeyStoreRequest withCustomKeyStoreId(String customKeyStoreId) {
        this.customKeyStoreId = customKeyStoreId;
        return this;
    }
}