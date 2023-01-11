package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCollectionRequest {
    @JsonProperty("CollectionId")
    public String collectionId;
    public DeleteCollectionRequest withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}