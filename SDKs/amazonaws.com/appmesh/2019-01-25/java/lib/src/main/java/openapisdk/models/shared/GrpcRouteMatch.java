package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcRouteMatch
 * An object that represents the criteria for determining a request match.
**/
public class GrpcRouteMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public GrpcRouteMetadata[] metadata;
    public GrpcRouteMatch withMetadata(GrpcRouteMetadata[] metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodName")
    public String methodName;
    public GrpcRouteMatch withMethodName(String methodName) {
        this.methodName = methodName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public GrpcRouteMatch withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}