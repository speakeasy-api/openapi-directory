package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeContainerInstancesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public DescribeContainerInstancesRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonProperty("containerInstances")
    public String[] containerInstances;
    public DescribeContainerInstancesRequest withContainerInstances(String[] containerInstances) {
        this.containerInstances = containerInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public ContainerInstanceFieldEnum[] include;
    public DescribeContainerInstancesRequest withInclude(ContainerInstanceFieldEnum[] include) {
        this.include = include;
        return this;
    }
}