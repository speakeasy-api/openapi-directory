package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTableDataImportJobResult {
    @JsonProperty("jobMetadata")
    public TableDataImportJobMetadata jobMetadata;
    public DescribeTableDataImportJobResult withJobMetadata(TableDataImportJobMetadata jobMetadata) {
        this.jobMetadata = jobMetadata;
        return this;
    }
    @JsonProperty("jobStatus")
    public TableDataImportJobStatusEnum jobStatus;
    public DescribeTableDataImportJobResult withJobStatus(TableDataImportJobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public DescribeTableDataImportJobResult withMessage(String message) {
        this.message = message;
        return this;
    }
}