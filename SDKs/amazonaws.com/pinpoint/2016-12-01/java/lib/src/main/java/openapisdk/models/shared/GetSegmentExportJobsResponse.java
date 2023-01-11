package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSegmentExportJobsResponse {
    @JsonProperty("ExportJobsResponse")
    public ExportJobsResponse exportJobsResponse;
    public GetSegmentExportJobsResponse withExportJobsResponse(ExportJobsResponse exportJobsResponse) {
        this.exportJobsResponse = exportJobsResponse;
        return this;
    }
}