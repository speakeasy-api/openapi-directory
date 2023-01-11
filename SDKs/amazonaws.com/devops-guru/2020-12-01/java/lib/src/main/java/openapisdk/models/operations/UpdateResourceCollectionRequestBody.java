package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateResourceCollectionRequestBody {
    @JsonProperty("Action")
    public UpdateResourceCollectionRequestBodyActionEnum action;
    public UpdateResourceCollectionRequestBody withAction(UpdateResourceCollectionRequestBodyActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("ResourceCollection")
    public UpdateResourceCollectionRequestBodyResourceCollection resourceCollection;
    public UpdateResourceCollectionRequestBody withResourceCollection(UpdateResourceCollectionRequestBodyResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
}