package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Measurement
 * Contains an asset measurement property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>IoT SiteWise User Guide</i>.
**/
public class Measurement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingConfig")
    public MeasurementProcessingConfig processingConfig;
    public Measurement withProcessingConfig(MeasurementProcessingConfig processingConfig) {
        this.processingConfig = processingConfig;
        return this;
    }
}