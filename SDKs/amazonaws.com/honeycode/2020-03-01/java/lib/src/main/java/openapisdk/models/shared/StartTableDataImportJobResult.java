package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartTableDataImportJobResult {
    @JsonProperty("jobId")
    public String jobId;
    public StartTableDataImportJobResult withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("jobStatus")
    public TableDataImportJobStatusEnum jobStatus;
    public StartTableDataImportJobResult withJobStatus(TableDataImportJobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
}