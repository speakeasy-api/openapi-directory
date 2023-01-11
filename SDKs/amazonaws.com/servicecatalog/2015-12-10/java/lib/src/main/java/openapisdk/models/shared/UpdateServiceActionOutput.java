package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateServiceActionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceActionDetail")
    public ServiceActionDetail serviceActionDetail;
    public UpdateServiceActionOutput withServiceActionDetail(ServiceActionDetail serviceActionDetail) {
        this.serviceActionDetail = serviceActionDetail;
        return this;
    }
}