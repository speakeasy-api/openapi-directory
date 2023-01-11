package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCollectionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public UpdateCollectionRequestBodyCollection collection;
    public UpdateCollectionRequestBody withCollection(UpdateCollectionRequestBodyCollection collection) {
        this.collection = collection;
        return this;
    }
}