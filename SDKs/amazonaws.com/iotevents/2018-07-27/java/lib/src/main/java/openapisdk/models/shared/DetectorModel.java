package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetectorModel
 * Information about the detector model.
**/
public class DetectorModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectorModelConfiguration")
    public DetectorModelConfiguration detectorModelConfiguration;
    public DetectorModel withDetectorModelConfiguration(DetectorModelConfiguration detectorModelConfiguration) {
        this.detectorModelConfiguration = detectorModelConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectorModelDefinition")
    public DetectorModelDefinition detectorModelDefinition;
    public DetectorModel withDetectorModelDefinition(DetectorModelDefinition detectorModelDefinition) {
        this.detectorModelDefinition = detectorModelDefinition;
        return this;
    }
}