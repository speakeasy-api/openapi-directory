package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoScalingConfigurationSummary
 * <p>Provides summary information about an AWS App Runner automatic scaling configuration resource.</p> <p>This type contains limited information about an auto scaling configuration. It includes only identification information, without configuration details. It's returned by the <a>ListAutoScalingConfigurations</a> action. Complete configuration information is returned by the <a>CreateAutoScalingConfiguration</a>, <a>DescribeAutoScalingConfiguration</a>, and <a>DeleteAutoScalingConfiguration</a> actions using the <a>AutoScalingConfiguration</a> type.</p>
**/
public class AutoScalingConfigurationSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingConfigurationArn")
    public String autoScalingConfigurationArn;
    public AutoScalingConfigurationSummary withAutoScalingConfigurationArn(String autoScalingConfigurationArn) {
        this.autoScalingConfigurationArn = autoScalingConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingConfigurationName")
    public String autoScalingConfigurationName;
    public AutoScalingConfigurationSummary withAutoScalingConfigurationName(String autoScalingConfigurationName) {
        this.autoScalingConfigurationName = autoScalingConfigurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingConfigurationRevision")
    public Long autoScalingConfigurationRevision;
    public AutoScalingConfigurationSummary withAutoScalingConfigurationRevision(Long autoScalingConfigurationRevision) {
        this.autoScalingConfigurationRevision = autoScalingConfigurationRevision;
        return this;
    }
}