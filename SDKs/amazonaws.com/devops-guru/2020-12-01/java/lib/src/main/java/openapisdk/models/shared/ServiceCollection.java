package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceCollection
 * A collection of the names of AWS services.
**/
public class ServiceCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceNames")
    public ServiceNameEnum[] serviceNames;
    public ServiceCollection withServiceNames(ServiceNameEnum[] serviceNames) {
        this.serviceNames = serviceNames;
        return this;
    }
}