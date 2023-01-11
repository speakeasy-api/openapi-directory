package openapisdk.models.operations;



public class ResumeServiceResponse {
    public String contentType;
    public ResumeServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ResumeServiceResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public ResumeServiceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidStateException;
    public ResumeServiceResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public ResumeServiceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.ResumeServiceResponse resumeServiceResponse;
    public ResumeServiceResponse withResumeServiceResponse(openapisdk.models.shared.ResumeServiceResponse resumeServiceResponse) {
        this.resumeServiceResponse = resumeServiceResponse;
        return this;
    }
    public Long statusCode;
    public ResumeServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}