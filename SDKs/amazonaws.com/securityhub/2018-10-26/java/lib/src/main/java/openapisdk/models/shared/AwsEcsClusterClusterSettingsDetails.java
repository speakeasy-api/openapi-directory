package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsClusterClusterSettingsDetails
 * Indicates whether to enable CloudWatch Container Insights for the ECS cluster.
**/
public class AwsEcsClusterClusterSettingsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsEcsClusterClusterSettingsDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AwsEcsClusterClusterSettingsDetails withValue(String value) {
        this.value = value;
        return this;
    }
}