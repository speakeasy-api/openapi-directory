package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchFacesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceMatches")
    public FaceMatch[] faceMatches;
    public SearchFacesResponse withFaceMatches(FaceMatch[] faceMatches) {
        this.faceMatches = faceMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceModelVersion")
    public String faceModelVersion;
    public SearchFacesResponse withFaceModelVersion(String faceModelVersion) {
        this.faceModelVersion = faceModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SearchedFaceId")
    public String searchedFaceId;
    public SearchFacesResponse withSearchedFaceId(String searchedFaceId) {
        this.searchedFaceId = searchedFaceId;
        return this;
    }
}