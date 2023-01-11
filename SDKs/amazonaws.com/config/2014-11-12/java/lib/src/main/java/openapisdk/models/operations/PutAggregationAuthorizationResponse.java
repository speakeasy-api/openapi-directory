package openapisdk.models.operations;



public class PutAggregationAuthorizationResponse {
    public String contentType;
    public PutAggregationAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public PutAggregationAuthorizationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.PutAggregationAuthorizationResponse putAggregationAuthorizationResponse;
    public PutAggregationAuthorizationResponse withPutAggregationAuthorizationResponse(openapisdk.models.shared.PutAggregationAuthorizationResponse putAggregationAuthorizationResponse) {
        this.putAggregationAuthorizationResponse = putAggregationAuthorizationResponse;
        return this;
    }
    public Long statusCode;
    public PutAggregationAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}