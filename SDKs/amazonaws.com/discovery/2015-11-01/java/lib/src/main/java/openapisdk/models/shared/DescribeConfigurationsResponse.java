package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurations")
    public java.util.Map<String, String>[] configurations;
    public DescribeConfigurationsResponse withConfigurations(java.util.Map<String, String>[] configurations) {
        this.configurations = configurations;
        return this;
    }
}