package openapisdk.models.operations;



public class ListParallelDataResponse {
    public String contentType;
    public ListParallelDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListParallelDataResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public ListParallelDataResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListParallelDataResponse listParallelDataResponse;
    public ListParallelDataResponse withListParallelDataResponse(openapisdk.models.shared.ListParallelDataResponse listParallelDataResponse) {
        this.listParallelDataResponse = listParallelDataResponse;
        return this;
    }
    public Long statusCode;
    public ListParallelDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListParallelDataResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}