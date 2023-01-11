package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetExportJobsResponse {
    @JsonProperty("ExportJobsResponse")
    public ExportJobsResponse exportJobsResponse;
    public GetExportJobsResponse withExportJobsResponse(ExportJobsResponse exportJobsResponse) {
        this.exportJobsResponse = exportJobsResponse;
        return this;
    }
}