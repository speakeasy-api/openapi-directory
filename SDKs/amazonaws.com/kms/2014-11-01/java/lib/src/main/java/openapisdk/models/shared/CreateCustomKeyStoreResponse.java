package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCustomKeyStoreResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomKeyStoreId")
    public String customKeyStoreId;
    public CreateCustomKeyStoreResponse withCustomKeyStoreId(String customKeyStoreId) {
        this.customKeyStoreId = customKeyStoreId;
        return this;
    }
}