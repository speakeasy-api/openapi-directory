/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MetricMonitorConfig - A structure that defines a metric to be used to monitor performance of the variations during a launch.
 */
public class MetricMonitorConfig {
    @JsonProperty("metricDefinition")
    public MetricDefinitionConfig metricDefinition;

    public MetricMonitorConfig withMetricDefinition(MetricDefinitionConfig metricDefinition) {
        this.metricDefinition = metricDefinition;
        return this;
    }
    
    public MetricMonitorConfig(@JsonProperty("metricDefinition") MetricDefinitionConfig metricDefinition) {
        this.metricDefinition = metricDefinition;
  }
}
