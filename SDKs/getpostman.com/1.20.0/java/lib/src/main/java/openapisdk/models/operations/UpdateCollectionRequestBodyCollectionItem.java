package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCollectionRequestBodyCollectionItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public UpdateCollectionRequestBodyCollectionItemItem[] item;
    public UpdateCollectionRequestBodyCollectionItem withItem(UpdateCollectionRequestBodyCollectionItemItem[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateCollectionRequestBodyCollectionItem withName(String name) {
        this.name = name;
        return this;
    }
}