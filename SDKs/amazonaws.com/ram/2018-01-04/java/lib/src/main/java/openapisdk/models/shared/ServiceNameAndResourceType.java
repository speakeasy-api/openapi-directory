package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceNameAndResourceType
 * Information about the shareable resource types and the Amazon Web Services services to which they belong.
**/
public class ServiceNameAndResourceType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public ServiceNameAndResourceType withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public ServiceNameAndResourceType withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}