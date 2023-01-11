package openapisdk.models.operations;



public class GetImportJobResponse {
    public Object badRequestException;
    public GetImportJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetImportJobResponse getImportJobResponse;
    public GetImportJobResponse withGetImportJobResponse(openapisdk.models.shared.GetImportJobResponse getImportJobResponse) {
        this.getImportJobResponse = getImportJobResponse;
        return this;
    }
    public Object notFoundException;
    public GetImportJobResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetImportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetImportJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}