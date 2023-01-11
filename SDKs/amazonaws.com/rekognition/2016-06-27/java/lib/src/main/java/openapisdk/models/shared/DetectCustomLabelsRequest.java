package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectCustomLabelsRequest {
    @JsonProperty("Image")
    public Image image;
    public DetectCustomLabelsRequest withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DetectCustomLabelsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinConfidence")
    public Float minConfidence;
    public DetectCustomLabelsRequest withMinConfidence(Float minConfidence) {
        this.minConfidence = minConfidence;
        return this;
    }
    @JsonProperty("ProjectVersionArn")
    public String projectVersionArn;
    public DetectCustomLabelsRequest withProjectVersionArn(String projectVersionArn) {
        this.projectVersionArn = projectVersionArn;
        return this;
    }
}