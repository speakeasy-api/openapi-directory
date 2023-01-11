package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSimulationApplicationRequestBody {
    @JsonProperty("application")
    public String application;
    public DescribeSimulationApplicationRequestBody withApplication(String application) {
        this.application = application;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationVersion")
    public String applicationVersion;
    public DescribeSimulationApplicationRequestBody withApplicationVersion(String applicationVersion) {
        this.applicationVersion = applicationVersion;
        return this;
    }
}