package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollectionRequestBodyCollectionItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public CreateCollectionRequestBodyCollectionItemItem[] item;
    public CreateCollectionRequestBodyCollectionItem withItem(CreateCollectionRequestBodyCollectionItemItem[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateCollectionRequestBodyCollectionItem withName(String name) {
        this.name = name;
        return this;
    }
}