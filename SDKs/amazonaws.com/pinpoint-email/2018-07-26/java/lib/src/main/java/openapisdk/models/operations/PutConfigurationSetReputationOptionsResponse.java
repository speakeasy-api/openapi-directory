package openapisdk.models.operations;



public class PutConfigurationSetReputationOptionsResponse {
    public Object badRequestException;
    public PutConfigurationSetReputationOptionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutConfigurationSetReputationOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public PutConfigurationSetReputationOptionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public java.util.Map<String, Object> putConfigurationSetReputationOptionsResponse;
    public PutConfigurationSetReputationOptionsResponse withPutConfigurationSetReputationOptionsResponse(java.util.Map<String, Object> putConfigurationSetReputationOptionsResponse) {
        this.putConfigurationSetReputationOptionsResponse = putConfigurationSetReputationOptionsResponse;
        return this;
    }
    public Long statusCode;
    public PutConfigurationSetReputationOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutConfigurationSetReputationOptionsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}