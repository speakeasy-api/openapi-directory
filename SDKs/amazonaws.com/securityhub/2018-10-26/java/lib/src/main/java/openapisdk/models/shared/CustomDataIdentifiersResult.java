package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomDataIdentifiersResult
 * Contains an instance of sensitive data that was detected by a customer-defined identifier.
**/
public class CustomDataIdentifiersResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Detections")
    public CustomDataIdentifiersDetections[] detections;
    public CustomDataIdentifiersResult withDetections(CustomDataIdentifiersDetections[] detections) {
        this.detections = detections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCount")
    public Long totalCount;
    public CustomDataIdentifiersResult withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}