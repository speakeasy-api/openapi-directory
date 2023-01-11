package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SecretScanningUpdateAlertRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public String resolution;
    public SecretScanningUpdateAlertRequestBody withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonProperty("state")
    public openapisdk.models.shared.SecretScanningAlertStateEnum state;
    public SecretScanningUpdateAlertRequestBody withState(openapisdk.models.shared.SecretScanningAlertStateEnum state) {
        this.state = state;
        return this;
    }
}