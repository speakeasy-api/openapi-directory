package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Face
 * Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. 
**/
public class Face {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BoundingBox")
    public BoundingBox boundingBox;
    public Face withBoundingBox(BoundingBox boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public Face withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExternalImageId")
    public String externalImageId;
    public Face withExternalImageId(String externalImageId) {
        this.externalImageId = externalImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceId")
    public String faceId;
    public Face withFaceId(String faceId) {
        this.faceId = faceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageId")
    public String imageId;
    public Face withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
}