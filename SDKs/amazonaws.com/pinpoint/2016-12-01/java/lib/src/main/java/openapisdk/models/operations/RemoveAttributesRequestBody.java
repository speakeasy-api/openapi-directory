package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveAttributesRequestBody {
    @JsonProperty("UpdateAttributesRequest")
    public RemoveAttributesRequestBodyUpdateAttributesRequest updateAttributesRequest;
    public RemoveAttributesRequestBody withUpdateAttributesRequest(RemoveAttributesRequestBodyUpdateAttributesRequest updateAttributesRequest) {
        this.updateAttributesRequest = updateAttributesRequest;
        return this;
    }
}