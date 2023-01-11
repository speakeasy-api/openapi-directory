package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFacesRequest {
    @JsonProperty("CollectionId")
    public String collectionId;
    public DeleteFacesRequest withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonProperty("FaceIds")
    public String[] faceIds;
    public DeleteFacesRequest withFaceIds(String[] faceIds) {
        this.faceIds = faceIds;
        return this;
    }
}