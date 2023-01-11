package openapisdk.models.operations;



public class DeleteAggregationAuthorizationResponse {
    public String contentType;
    public DeleteAggregationAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteAggregationAuthorizationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public DeleteAggregationAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}