package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFacesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceModelVersion")
    public String faceModelVersion;
    public ListFacesResponse withFaceModelVersion(String faceModelVersion) {
        this.faceModelVersion = faceModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Faces")
    public Face[] faces;
    public ListFacesResponse withFaces(Face[] faces) {
        this.faces = faces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFacesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}