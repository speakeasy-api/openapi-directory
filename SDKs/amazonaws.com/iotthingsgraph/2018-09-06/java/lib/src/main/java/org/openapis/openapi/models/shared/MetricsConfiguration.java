/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MetricsConfiguration - An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
 */
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
    
    public MetricsConfiguration(){}
}
