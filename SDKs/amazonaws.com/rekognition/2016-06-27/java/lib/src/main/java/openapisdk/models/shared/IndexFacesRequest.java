package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IndexFacesRequest {
    @JsonProperty("CollectionId")
    public String collectionId;
    public IndexFacesRequest withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetectionAttributes")
    public AttributeEnum[] detectionAttributes;
    public IndexFacesRequest withDetectionAttributes(AttributeEnum[] detectionAttributes) {
        this.detectionAttributes = detectionAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExternalImageId")
    public String externalImageId;
    public IndexFacesRequest withExternalImageId(String externalImageId) {
        this.externalImageId = externalImageId;
        return this;
    }
    @JsonProperty("Image")
    public Image image;
    public IndexFacesRequest withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxFaces")
    public Long maxFaces;
    public IndexFacesRequest withMaxFaces(Long maxFaces) {
        this.maxFaces = maxFaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualityFilter")
    public QualityFilterEnum qualityFilter;
    public IndexFacesRequest withQualityFilter(QualityFilterEnum qualityFilter) {
        this.qualityFilter = qualityFilter;
        return this;
    }
}