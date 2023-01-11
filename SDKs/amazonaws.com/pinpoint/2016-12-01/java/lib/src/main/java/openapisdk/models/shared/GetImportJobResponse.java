package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetImportJobResponse {
    @JsonProperty("ImportJobResponse")
    public ImportJobResponse importJobResponse;
    public GetImportJobResponse withImportJobResponse(ImportJobResponse importJobResponse) {
        this.importJobResponse = importJobResponse;
        return this;
    }
}