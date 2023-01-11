package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenerateRandomRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomKeyStoreId")
    public String customKeyStoreId;
    public GenerateRandomRequest withCustomKeyStoreId(String customKeyStoreId) {
        this.customKeyStoreId = customKeyStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfBytes")
    public Long numberOfBytes;
    public GenerateRandomRequest withNumberOfBytes(Long numberOfBytes) {
        this.numberOfBytes = numberOfBytes;
        return this;
    }
}