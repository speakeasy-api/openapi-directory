package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchFacesByImageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceMatches")
    public FaceMatch[] faceMatches;
    public SearchFacesByImageResponse withFaceMatches(FaceMatch[] faceMatches) {
        this.faceMatches = faceMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceModelVersion")
    public String faceModelVersion;
    public SearchFacesByImageResponse withFaceModelVersion(String faceModelVersion) {
        this.faceModelVersion = faceModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SearchedFaceBoundingBox")
    public BoundingBox searchedFaceBoundingBox;
    public SearchFacesByImageResponse withSearchedFaceBoundingBox(BoundingBox searchedFaceBoundingBox) {
        this.searchedFaceBoundingBox = searchedFaceBoundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SearchedFaceConfidence")
    public Float searchedFaceConfidence;
    public SearchFacesByImageResponse withSearchedFaceConfidence(Float searchedFaceConfidence) {
        this.searchedFaceConfidence = searchedFaceConfidence;
        return this;
    }
}