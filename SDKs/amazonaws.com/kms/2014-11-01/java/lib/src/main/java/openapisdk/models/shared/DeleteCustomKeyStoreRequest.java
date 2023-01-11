package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCustomKeyStoreRequest {
    @JsonProperty("CustomKeyStoreId")
    public String customKeyStoreId;
    public DeleteCustomKeyStoreRequest withCustomKeyStoreId(String customKeyStoreId) {
        this.customKeyStoreId = customKeyStoreId;
        return this;
    }
}