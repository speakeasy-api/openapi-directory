package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateServiceIntegrationRequestBody {
    @JsonProperty("ServiceIntegration")
    public UpdateServiceIntegrationRequestBodyServiceIntegration serviceIntegration;
    public UpdateServiceIntegrationRequestBody withServiceIntegration(UpdateServiceIntegrationRequestBodyServiceIntegration serviceIntegration) {
        this.serviceIntegration = serviceIntegration;
        return this;
    }
}