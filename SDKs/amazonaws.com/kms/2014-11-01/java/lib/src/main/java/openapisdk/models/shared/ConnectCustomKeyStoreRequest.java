package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConnectCustomKeyStoreRequest {
    @JsonProperty("CustomKeyStoreId")
    public String customKeyStoreId;
    public ConnectCustomKeyStoreRequest withCustomKeyStoreId(String customKeyStoreId) {
        this.customKeyStoreId = customKeyStoreId;
        return this;
    }
}