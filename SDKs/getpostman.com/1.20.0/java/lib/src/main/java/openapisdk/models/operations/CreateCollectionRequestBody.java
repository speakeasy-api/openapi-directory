package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollectionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public CreateCollectionRequestBodyCollection collection;
    public CreateCollectionRequestBody withCollection(CreateCollectionRequestBodyCollection collection) {
        this.collection = collection;
        return this;
    }
}