package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceInfo
 * Information about a service.
**/
public class ServiceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceCode")
    public String serviceCode;
    public ServiceInfo withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceName")
    public String serviceName;
    public ServiceInfo withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}