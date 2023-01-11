package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollectionRequestBodyCollectionItemItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateCollectionRequestBodyCollectionItemItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public CreateCollectionRequestBodyCollectionItemItemRequest request;
    public CreateCollectionRequestBodyCollectionItemItem withRequest(CreateCollectionRequestBodyCollectionItemItemRequest request) {
        this.request = request;
        return this;
    }
}