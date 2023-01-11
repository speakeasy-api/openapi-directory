package openapisdk.models.operations;



public class ListTerminologiesResponse {
    public String contentType;
    public ListTerminologiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListTerminologiesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public ListTerminologiesResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListTerminologiesResponse listTerminologiesResponse;
    public ListTerminologiesResponse withListTerminologiesResponse(openapisdk.models.shared.ListTerminologiesResponse listTerminologiesResponse) {
        this.listTerminologiesResponse = listTerminologiesResponse;
        return this;
    }
    public Long statusCode;
    public ListTerminologiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListTerminologiesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}