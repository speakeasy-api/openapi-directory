package openapisdk.models.operations;



public class PutAttributesResponse {
    public Object attributeLimitExceededException;
    public PutAttributesResponse withAttributeLimitExceededException(Object attributeLimitExceededException) {
        this.attributeLimitExceededException = attributeLimitExceededException;
        return this;
    }
    public Object clusterNotFoundException;
    public PutAttributesResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public PutAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutAttributesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.PutAttributesResponse putAttributesResponse;
    public PutAttributesResponse withPutAttributesResponse(openapisdk.models.shared.PutAttributesResponse putAttributesResponse) {
        this.putAttributesResponse = putAttributesResponse;
        return this;
    }
    public Long statusCode;
    public PutAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object targetNotFoundException;
    public PutAttributesResponse withTargetNotFoundException(Object targetNotFoundException) {
        this.targetNotFoundException = targetNotFoundException;
        return this;
    }
}