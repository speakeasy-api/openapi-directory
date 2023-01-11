package openapisdk.models.operations;



public class ReportTaskProgressResponse {
    public String contentType;
    public ReportTaskProgressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ReportTaskProgressResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public ReportTaskProgressResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public ReportTaskProgressResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public ReportTaskProgressResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public openapisdk.models.shared.ReportTaskProgressOutput reportTaskProgressOutput;
    public ReportTaskProgressResponse withReportTaskProgressOutput(openapisdk.models.shared.ReportTaskProgressOutput reportTaskProgressOutput) {
        this.reportTaskProgressOutput = reportTaskProgressOutput;
        return this;
    }
    public Long statusCode;
    public ReportTaskProgressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskNotFoundException;
    public ReportTaskProgressResponse withTaskNotFoundException(Object taskNotFoundException) {
        this.taskNotFoundException = taskNotFoundException;
        return this;
    }
}