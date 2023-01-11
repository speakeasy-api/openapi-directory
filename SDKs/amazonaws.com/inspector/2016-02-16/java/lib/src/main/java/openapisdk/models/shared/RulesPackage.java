package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RulesPackage
 * Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action.
**/
public class RulesPackage {
    @JsonProperty("arn")
    public String arn;
    public RulesPackage withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RulesPackage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RulesPackage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("provider")
    public String provider;
    public RulesPackage withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public RulesPackage withVersion(String version) {
        this.version = version;
        return this;
    }
}