package openapisdk.models.operations;



public class GetMediaForFragmentListResponse {
    public Object clientLimitExceededException;
    public GetMediaForFragmentListResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public GetMediaForFragmentListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMediaForFragmentListOutput getMediaForFragmentListOutput;
    public GetMediaForFragmentListResponse withGetMediaForFragmentListOutput(openapisdk.models.shared.GetMediaForFragmentListOutput getMediaForFragmentListOutput) {
        this.getMediaForFragmentListOutput = getMediaForFragmentListOutput;
        return this;
    }
    public Object invalidArgumentException;
    public GetMediaForFragmentListResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object notAuthorizedException;
    public GetMediaForFragmentListResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMediaForFragmentListResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetMediaForFragmentListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}