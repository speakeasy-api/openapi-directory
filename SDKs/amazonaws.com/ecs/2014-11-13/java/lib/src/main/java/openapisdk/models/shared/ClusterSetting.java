package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClusterSetting
 * The settings to use when creating a cluster. This parameter is used to enable CloudWatch Container Insights for a cluster.
**/
public class ClusterSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public ClusterSettingNameEnum name;
    public ClusterSetting withName(ClusterSettingNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ClusterSetting withValue(String value) {
        this.value = value;
        return this;
    }
}