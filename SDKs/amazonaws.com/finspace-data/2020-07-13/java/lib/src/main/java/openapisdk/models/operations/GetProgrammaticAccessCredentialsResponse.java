package openapisdk.models.operations;



public class GetProgrammaticAccessCredentialsResponse {
    public Object accessDeniedException;
    public GetProgrammaticAccessCredentialsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetProgrammaticAccessCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetProgrammaticAccessCredentialsResponse getProgrammaticAccessCredentialsResponse;
    public GetProgrammaticAccessCredentialsResponse withGetProgrammaticAccessCredentialsResponse(openapisdk.models.shared.GetProgrammaticAccessCredentialsResponse getProgrammaticAccessCredentialsResponse) {
        this.getProgrammaticAccessCredentialsResponse = getProgrammaticAccessCredentialsResponse;
        return this;
    }
    public Object internalServerException;
    public GetProgrammaticAccessCredentialsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public GetProgrammaticAccessCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetProgrammaticAccessCredentialsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}