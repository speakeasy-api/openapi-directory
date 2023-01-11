package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeComponentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationComponent")
    public ApplicationComponent applicationComponent;
    public DescribeComponentResponse withApplicationComponent(ApplicationComponent applicationComponent) {
        this.applicationComponent = applicationComponent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceList")
    public String[] resourceList;
    public DescribeComponentResponse withResourceList(String[] resourceList) {
        this.resourceList = resourceList;
        return this;
    }
}