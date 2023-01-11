package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServicesInScopeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceMetadata")
    public ServiceMetadata[] serviceMetadata;
    public GetServicesInScopeResponse withServiceMetadata(ServiceMetadata[] serviceMetadata) {
        this.serviceMetadata = serviceMetadata;
        return this;
    }
}