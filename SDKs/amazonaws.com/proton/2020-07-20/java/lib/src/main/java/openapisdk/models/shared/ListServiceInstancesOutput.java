package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceInstancesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListServiceInstancesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("serviceInstances")
    public ServiceInstanceSummary[] serviceInstances;
    public ListServiceInstancesOutput withServiceInstances(ServiceInstanceSummary[] serviceInstances) {
        this.serviceInstances = serviceInstances;
        return this;
    }
}