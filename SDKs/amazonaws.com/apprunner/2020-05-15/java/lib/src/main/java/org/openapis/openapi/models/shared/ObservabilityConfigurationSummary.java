/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObservabilityConfigurationSummary - &lt;p&gt;Provides summary information about an App Runner observability configuration resource.&lt;/p&gt; &lt;p&gt;This type contains limited information about an observability configuration. It includes only identification information, without configuration details. It's returned by the &lt;a&gt;ListObservabilityConfigurations&lt;/a&gt; action. Complete configuration information is returned by the &lt;a&gt;CreateObservabilityConfiguration&lt;/a&gt;, &lt;a&gt;DescribeObservabilityConfiguration&lt;/a&gt;, and &lt;a&gt;DeleteObservabilityConfiguration&lt;/a&gt; actions using the &lt;a&gt;ObservabilityConfiguration&lt;/a&gt; type.&lt;/p&gt;
 */
public class ObservabilityConfigurationSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObservabilityConfigurationArn")
    public String observabilityConfigurationArn;

    public ObservabilityConfigurationSummary withObservabilityConfigurationArn(String observabilityConfigurationArn) {
        this.observabilityConfigurationArn = observabilityConfigurationArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObservabilityConfigurationName")
    public String observabilityConfigurationName;

    public ObservabilityConfigurationSummary withObservabilityConfigurationName(String observabilityConfigurationName) {
        this.observabilityConfigurationName = observabilityConfigurationName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObservabilityConfigurationRevision")
    public Long observabilityConfigurationRevision;

    public ObservabilityConfigurationSummary withObservabilityConfigurationRevision(Long observabilityConfigurationRevision) {
        this.observabilityConfigurationRevision = observabilityConfigurationRevision;
        return this;
    }
    
    public ObservabilityConfigurationSummary(){}
}
