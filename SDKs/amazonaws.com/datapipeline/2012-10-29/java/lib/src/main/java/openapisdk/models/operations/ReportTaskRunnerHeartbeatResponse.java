package openapisdk.models.operations;



public class ReportTaskRunnerHeartbeatResponse {
    public String contentType;
    public ReportTaskRunnerHeartbeatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ReportTaskRunnerHeartbeatResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public ReportTaskRunnerHeartbeatResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ReportTaskRunnerHeartbeatOutput reportTaskRunnerHeartbeatOutput;
    public ReportTaskRunnerHeartbeatResponse withReportTaskRunnerHeartbeatOutput(openapisdk.models.shared.ReportTaskRunnerHeartbeatOutput reportTaskRunnerHeartbeatOutput) {
        this.reportTaskRunnerHeartbeatOutput = reportTaskRunnerHeartbeatOutput;
        return this;
    }
    public Long statusCode;
    public ReportTaskRunnerHeartbeatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}