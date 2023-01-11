package openapisdk.models.shared;



/**
 * CloudWatchDimensionConfiguration
 * <p>Contains the dimension configuration to use when you publish email sending events to Amazon CloudWatch.</p> <p>For information about publishing email sending events to Amazon CloudWatch, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
**/
public class CloudWatchDimensionConfiguration {
    public String defaultDimensionValue;
    public CloudWatchDimensionConfiguration withDefaultDimensionValue(String defaultDimensionValue) {
        this.defaultDimensionValue = defaultDimensionValue;
        return this;
    }
    public String dimensionName;
    public CloudWatchDimensionConfiguration withDimensionName(String dimensionName) {
        this.dimensionName = dimensionName;
        return this;
    }
    public DimensionValueSourceEnum dimensionValueSource;
    public CloudWatchDimensionConfiguration withDimensionValueSource(DimensionValueSourceEnum dimensionValueSource) {
        this.dimensionValueSource = dimensionValueSource;
        return this;
    }
}