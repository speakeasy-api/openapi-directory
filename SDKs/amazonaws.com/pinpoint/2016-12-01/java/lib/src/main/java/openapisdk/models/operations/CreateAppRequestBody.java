package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAppRequestBody {
    @JsonProperty("CreateApplicationRequest")
    public CreateAppRequestBodyCreateApplicationRequest createApplicationRequest;
    public CreateAppRequestBody withCreateApplicationRequest(CreateAppRequestBodyCreateApplicationRequest createApplicationRequest) {
        this.createApplicationRequest = createApplicationRequest;
        return this;
    }
}