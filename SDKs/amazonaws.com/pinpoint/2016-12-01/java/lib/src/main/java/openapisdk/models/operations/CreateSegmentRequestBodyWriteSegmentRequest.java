package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSegmentRequestBodyWriteSegmentRequest
 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
**/
public class CreateSegmentRequestBodyWriteSegmentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimensions")
    public openapisdk.models.shared.SegmentDimensions dimensions;
    public CreateSegmentRequestBodyWriteSegmentRequest withDimensions(openapisdk.models.shared.SegmentDimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateSegmentRequestBodyWriteSegmentRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentGroups")
    public openapisdk.models.shared.SegmentGroupList segmentGroups;
    public CreateSegmentRequestBodyWriteSegmentRequest withSegmentGroups(openapisdk.models.shared.SegmentGroupList segmentGroups) {
        this.segmentGroups = segmentGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateSegmentRequestBodyWriteSegmentRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}