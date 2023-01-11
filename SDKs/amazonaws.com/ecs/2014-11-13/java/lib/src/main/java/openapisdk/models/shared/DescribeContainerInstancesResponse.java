package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeContainerInstancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerInstances")
    public ContainerInstance[] containerInstances;
    public DescribeContainerInstancesResponse withContainerInstances(ContainerInstance[] containerInstances) {
        this.containerInstances = containerInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public Failure[] failures;
    public DescribeContainerInstancesResponse withFailures(Failure[] failures) {
        this.failures = failures;
        return this;
    }
}