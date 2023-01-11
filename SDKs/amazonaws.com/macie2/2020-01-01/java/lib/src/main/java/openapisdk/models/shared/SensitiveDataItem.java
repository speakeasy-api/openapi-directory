package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SensitiveDataItem
 * Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.
**/
public class SensitiveDataItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public SensitiveDataItemCategoryEnum category;
    public SensitiveDataItem withCategory(SensitiveDataItemCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detections")
    public DefaultDetection[] detections;
    public SensitiveDataItem withDetections(DefaultDetection[] detections) {
        this.detections = detections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Long totalCount;
    public SensitiveDataItem withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}