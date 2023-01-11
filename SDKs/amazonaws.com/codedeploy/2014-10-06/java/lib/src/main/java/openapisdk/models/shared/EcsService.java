package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EcsService
 *  Contains the service and cluster names used to identify an Amazon ECS deployment's target. 
**/
public class EcsService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;
    public EcsService withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public EcsService withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}