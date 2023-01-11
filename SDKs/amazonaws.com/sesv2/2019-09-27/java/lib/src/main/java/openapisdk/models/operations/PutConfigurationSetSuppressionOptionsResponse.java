package openapisdk.models.operations;



public class PutConfigurationSetSuppressionOptionsResponse {
    public Object badRequestException;
    public PutConfigurationSetSuppressionOptionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutConfigurationSetSuppressionOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public PutConfigurationSetSuppressionOptionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public java.util.Map<String, Object> putConfigurationSetSuppressionOptionsResponse;
    public PutConfigurationSetSuppressionOptionsResponse withPutConfigurationSetSuppressionOptionsResponse(java.util.Map<String, Object> putConfigurationSetSuppressionOptionsResponse) {
        this.putConfigurationSetSuppressionOptionsResponse = putConfigurationSetSuppressionOptionsResponse;
        return this;
    }
    public Long statusCode;
    public PutConfigurationSetSuppressionOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutConfigurationSetSuppressionOptionsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}