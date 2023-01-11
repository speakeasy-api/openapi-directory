package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElasticBeanstalkEnvironmentOptionSetting
 * A configuration option setting for the environment.
**/
public class AwsElasticBeanstalkEnvironmentOptionSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Namespace")
    public String namespace;
    public AwsElasticBeanstalkEnvironmentOptionSetting withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptionName")
    public String optionName;
    public AwsElasticBeanstalkEnvironmentOptionSetting withOptionName(String optionName) {
        this.optionName = optionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceName")
    public String resourceName;
    public AwsElasticBeanstalkEnvironmentOptionSetting withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AwsElasticBeanstalkEnvironmentOptionSetting withValue(String value) {
        this.value = value;
        return this;
    }
}