package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateServiceActionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceActionDetail")
    public ServiceActionDetail serviceActionDetail;
    public CreateServiceActionOutput withServiceActionDetail(ServiceActionDetail serviceActionDetail) {
        this.serviceActionDetail = serviceActionDetail;
        return this;
    }
}