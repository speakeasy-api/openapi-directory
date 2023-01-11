package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentTypeInfo
 * Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>. An array of <code>SegmentTypeInfo</code> objects is returned by the response from <a>GetSegmentDetection</a>.
**/
public class SegmentTypeInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelVersion")
    public String modelVersion;
    public SegmentTypeInfo withModelVersion(String modelVersion) {
        this.modelVersion = modelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public SegmentTypeEnum type;
    public SegmentTypeInfo withType(SegmentTypeEnum type) {
        this.type = type;
        return this;
    }
}