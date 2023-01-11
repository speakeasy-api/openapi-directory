package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetectorDebugOption
 * The detector model and the specific detectors (instances) for which the logging level is given.
**/
public class DetectorDebugOption {
    @JsonProperty("detectorModelName")
    public String detectorModelName;
    public DetectorDebugOption withDetectorModelName(String detectorModelName) {
        this.detectorModelName = detectorModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyValue")
    public String keyValue;
    public DetectorDebugOption withKeyValue(String keyValue) {
        this.keyValue = keyValue;
        return this;
    }
}