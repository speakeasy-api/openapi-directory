package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CloudWatchDimensionConfiguration
 * An object that defines the dimension configuration to use when you send Amazon Pinpoint email events to Amazon CloudWatch.
**/
public class CloudWatchDimensionConfiguration {
    @JsonProperty("DefaultDimensionValue")
    public String defaultDimensionValue;
    public CloudWatchDimensionConfiguration withDefaultDimensionValue(String defaultDimensionValue) {
        this.defaultDimensionValue = defaultDimensionValue;
        return this;
    }
    @JsonProperty("DimensionName")
    public String dimensionName;
    public CloudWatchDimensionConfiguration withDimensionName(String dimensionName) {
        this.dimensionName = dimensionName;
        return this;
    }
    @JsonProperty("DimensionValueSource")
    public DimensionValueSourceEnum dimensionValueSource;
    public CloudWatchDimensionConfiguration withDimensionValueSource(DimensionValueSourceEnum dimensionValueSource) {
        this.dimensionValueSource = dimensionValueSource;
        return this;
    }
}