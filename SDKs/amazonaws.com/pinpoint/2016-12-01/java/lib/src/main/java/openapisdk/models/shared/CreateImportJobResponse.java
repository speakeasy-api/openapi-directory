package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateImportJobResponse {
    @JsonProperty("ImportJobResponse")
    public ImportJobResponse importJobResponse;
    public CreateImportJobResponse withImportJobResponse(ImportJobResponse importJobResponse) {
        this.importJobResponse = importJobResponse;
        return this;
    }
}