package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeCollectionRequest {
    @JsonProperty("CollectionId")
    public String collectionId;
    public DescribeCollectionRequest withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}