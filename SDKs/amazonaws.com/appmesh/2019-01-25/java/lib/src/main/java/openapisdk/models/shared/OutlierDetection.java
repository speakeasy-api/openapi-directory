package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OutlierDetection
 * An object that represents the outlier detection for a virtual node's listener.
**/
public class OutlierDetection {
    @JsonProperty("baseEjectionDuration")
    public Duration baseEjectionDuration;
    public OutlierDetection withBaseEjectionDuration(Duration baseEjectionDuration) {
        this.baseEjectionDuration = baseEjectionDuration;
        return this;
    }
    @JsonProperty("interval")
    public Duration interval;
    public OutlierDetection withInterval(Duration interval) {
        this.interval = interval;
        return this;
    }
    @JsonProperty("maxEjectionPercent")
    public Long maxEjectionPercent;
    public OutlierDetection withMaxEjectionPercent(Long maxEjectionPercent) {
        this.maxEjectionPercent = maxEjectionPercent;
        return this;
    }
    @JsonProperty("maxServerErrors")
    public Long maxServerErrors;
    public OutlierDetection withMaxServerErrors(Long maxServerErrors) {
        this.maxServerErrors = maxServerErrors;
        return this;
    }
}