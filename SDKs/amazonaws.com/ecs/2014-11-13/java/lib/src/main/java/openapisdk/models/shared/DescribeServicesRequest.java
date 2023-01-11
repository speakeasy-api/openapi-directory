package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeServicesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public DescribeServicesRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public ServiceFieldEnum[] include;
    public DescribeServicesRequest withInclude(ServiceFieldEnum[] include) {
        this.include = include;
        return this;
    }
    @JsonProperty("services")
    public String[] services;
    public DescribeServicesRequest withServices(String[] services) {
        this.services = services;
        return this;
    }
}