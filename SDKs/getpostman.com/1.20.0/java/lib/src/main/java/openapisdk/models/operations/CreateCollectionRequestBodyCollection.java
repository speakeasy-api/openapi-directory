package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollectionRequestBodyCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public CreateCollectionRequestBodyCollectionInfo info;
    public CreateCollectionRequestBodyCollection withInfo(CreateCollectionRequestBodyCollectionInfo info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public CreateCollectionRequestBodyCollectionItem[] item;
    public CreateCollectionRequestBodyCollection withItem(CreateCollectionRequestBodyCollectionItem[] item) {
        this.item = item;
        return this;
    }
}