/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeObservabilityConfigurationRequest {
    @JsonProperty("ObservabilityConfigurationArn")
    public String observabilityConfigurationArn;

    public DescribeObservabilityConfigurationRequest withObservabilityConfigurationArn(String observabilityConfigurationArn) {
        this.observabilityConfigurationArn = observabilityConfigurationArn;
        return this;
    }
    
    public DescribeObservabilityConfigurationRequest(@JsonProperty("ObservabilityConfigurationArn") String observabilityConfigurationArn) {
        this.observabilityConfigurationArn = observabilityConfigurationArn;
  }
}
