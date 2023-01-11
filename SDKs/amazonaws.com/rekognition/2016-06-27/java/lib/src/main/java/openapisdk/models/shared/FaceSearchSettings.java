package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FaceSearchSettings
 * Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for <a>CreateStreamProcessor</a>.
**/
public class FaceSearchSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CollectionId")
    public String collectionId;
    public FaceSearchSettings withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceMatchThreshold")
    public Float faceMatchThreshold;
    public FaceSearchSettings withFaceMatchThreshold(Float faceMatchThreshold) {
        this.faceMatchThreshold = faceMatchThreshold;
        return this;
    }
}