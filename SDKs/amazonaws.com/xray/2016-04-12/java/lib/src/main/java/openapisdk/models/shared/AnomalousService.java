package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnomalousService
 * The service within the service graph that has anomalously high fault rates. 
**/
public class AnomalousService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceId")
    public ServiceId serviceId;
    public AnomalousService withServiceId(ServiceId serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}