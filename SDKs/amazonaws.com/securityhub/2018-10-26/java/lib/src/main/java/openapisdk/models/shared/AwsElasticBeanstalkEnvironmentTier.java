package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElasticBeanstalkEnvironmentTier
 * Contains information about the tier of the environment.
**/
public class AwsElasticBeanstalkEnvironmentTier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsElasticBeanstalkEnvironmentTier withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsElasticBeanstalkEnvironmentTier withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public AwsElasticBeanstalkEnvironmentTier withVersion(String version) {
        this.version = version;
        return this;
    }
}