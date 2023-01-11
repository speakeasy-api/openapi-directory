package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCollectionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CollectionIds")
    public String[] collectionIds;
    public ListCollectionsResponse withCollectionIds(String[] collectionIds) {
        this.collectionIds = collectionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceModelVersions")
    public String[] faceModelVersions;
    public ListCollectionsResponse withFaceModelVersions(String[] faceModelVersions) {
        this.faceModelVersions = faceModelVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCollectionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}