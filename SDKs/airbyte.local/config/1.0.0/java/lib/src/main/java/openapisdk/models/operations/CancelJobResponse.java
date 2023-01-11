package openapisdk.models.operations;



public class CancelJobResponse {
    public String contentType;
    public CancelJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public CancelJobResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.JobInfoRead jobInfoRead;
    public CancelJobResponse withJobInfoRead(openapisdk.models.shared.JobInfoRead jobInfoRead) {
        this.jobInfoRead = jobInfoRead;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public CancelJobResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public CancelJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}