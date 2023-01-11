package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SensitiveDataResult
 * Contains a detected instance of sensitive data that are based on built-in identifiers.
**/
public class SensitiveDataResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Category")
    public String category;
    public SensitiveDataResult withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Detections")
    public SensitiveDataDetections[] detections;
    public SensitiveDataResult withDetections(SensitiveDataDetections[] detections) {
        this.detections = detections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCount")
    public Long totalCount;
    public SensitiveDataResult withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}