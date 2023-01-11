package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCollectionRequestBodyCollectionItemItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateCollectionRequestBodyCollectionItemItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public UpdateCollectionRequestBodyCollectionItemItemRequest request;
    public UpdateCollectionRequestBodyCollectionItemItem withRequest(UpdateCollectionRequestBodyCollectionItemItemRequest request) {
        this.request = request;
        return this;
    }
}