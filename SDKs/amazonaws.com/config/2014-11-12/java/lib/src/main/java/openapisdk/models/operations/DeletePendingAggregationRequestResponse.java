package openapisdk.models.operations;



public class DeletePendingAggregationRequestResponse {
    public String contentType;
    public DeletePendingAggregationRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public DeletePendingAggregationRequestResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public DeletePendingAggregationRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}