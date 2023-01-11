package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateImportJobRequestBody {
    @JsonProperty("ImportJobRequest")
    public CreateImportJobRequestBodyImportJobRequest importJobRequest;
    public CreateImportJobRequestBody withImportJobRequest(CreateImportJobRequestBodyImportJobRequest importJobRequest) {
        this.importJobRequest = importJobRequest;
        return this;
    }
}