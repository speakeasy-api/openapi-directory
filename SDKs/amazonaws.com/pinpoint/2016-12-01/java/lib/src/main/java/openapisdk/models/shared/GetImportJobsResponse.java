package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetImportJobsResponse {
    @JsonProperty("ImportJobsResponse")
    public ImportJobsResponse importJobsResponse;
    public GetImportJobsResponse withImportJobsResponse(ImportJobsResponse importJobsResponse) {
        this.importJobsResponse = importJobsResponse;
        return this;
    }
}