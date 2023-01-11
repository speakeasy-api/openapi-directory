package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSegmentImportJobsResponse {
    @JsonProperty("ImportJobsResponse")
    public ImportJobsResponse importJobsResponse;
    public GetSegmentImportJobsResponse withImportJobsResponse(ImportJobsResponse importJobsResponse) {
        this.importJobsResponse = importJobsResponse;
        return this;
    }
}