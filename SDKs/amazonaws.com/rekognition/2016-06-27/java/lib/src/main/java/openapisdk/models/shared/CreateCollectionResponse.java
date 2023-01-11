package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CollectionArn")
    public String collectionArn;
    public CreateCollectionResponse withCollectionArn(String collectionArn) {
        this.collectionArn = collectionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceModelVersion")
    public String faceModelVersion;
    public CreateCollectionResponse withFaceModelVersion(String faceModelVersion) {
        this.faceModelVersion = faceModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusCode")
    public Long statusCode;
    public CreateCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}