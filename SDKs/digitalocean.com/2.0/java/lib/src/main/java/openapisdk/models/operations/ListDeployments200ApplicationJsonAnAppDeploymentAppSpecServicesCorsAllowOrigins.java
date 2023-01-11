package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exact")
    public String exact;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins withExact(String exact) {
        this.exact = exact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public String regex;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins withRegex(String regex) {
        this.regex = regex;
        return this;
    }
}