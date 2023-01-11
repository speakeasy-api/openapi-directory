package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricsConfiguration
 * An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
**/
public class MetricsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudMetricEnabled")
    public Boolean cloudMetricEnabled;
    public MetricsConfiguration withCloudMetricEnabled(Boolean cloudMetricEnabled) {
        this.cloudMetricEnabled = cloudMetricEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricRuleRoleArn")
    public String metricRuleRoleArn;
    public MetricsConfiguration withMetricRuleRoleArn(String metricRuleRoleArn) {
        this.metricRuleRoleArn = metricRuleRoleArn;
        return this;
    }
}