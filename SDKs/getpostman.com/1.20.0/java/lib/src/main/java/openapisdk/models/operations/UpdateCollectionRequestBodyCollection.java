package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCollectionRequestBodyCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public UpdateCollectionRequestBodyCollectionInfo info;
    public UpdateCollectionRequestBodyCollection withInfo(UpdateCollectionRequestBodyCollectionInfo info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public UpdateCollectionRequestBodyCollectionItem[] item;
    public UpdateCollectionRequestBodyCollection withItem(UpdateCollectionRequestBodyCollectionItem[] item) {
        this.item = item;
        return this;
    }
}