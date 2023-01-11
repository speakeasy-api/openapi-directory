package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomDataIdentifiers
 * Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.
**/
public class CustomDataIdentifiers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detections")
    public CustomDetection[] detections;
    public CustomDataIdentifiers withDetections(CustomDetection[] detections) {
        this.detections = detections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Long totalCount;
    public CustomDataIdentifiers withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}