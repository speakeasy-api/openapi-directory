package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchFacesByImageRequest {
    @JsonProperty("CollectionId")
    public String collectionId;
    public SearchFacesByImageRequest withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceMatchThreshold")
    public Float faceMatchThreshold;
    public SearchFacesByImageRequest withFaceMatchThreshold(Float faceMatchThreshold) {
        this.faceMatchThreshold = faceMatchThreshold;
        return this;
    }
    @JsonProperty("Image")
    public Image image;
    public SearchFacesByImageRequest withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxFaces")
    public Long maxFaces;
    public SearchFacesByImageRequest withMaxFaces(Long maxFaces) {
        this.maxFaces = maxFaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualityFilter")
    public QualityFilterEnum qualityFilter;
    public SearchFacesByImageRequest withQualityFilter(QualityFilterEnum qualityFilter) {
        this.qualityFilter = qualityFilter;
        return this;
    }
}