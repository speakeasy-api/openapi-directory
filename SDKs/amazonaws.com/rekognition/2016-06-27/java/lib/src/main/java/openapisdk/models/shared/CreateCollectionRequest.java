package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollectionRequest {
    @JsonProperty("CollectionId")
    public String collectionId;
    public CreateCollectionRequest withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateCollectionRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}