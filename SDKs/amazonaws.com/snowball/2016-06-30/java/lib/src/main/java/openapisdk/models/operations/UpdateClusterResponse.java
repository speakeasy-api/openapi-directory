package openapisdk.models.operations;



public class UpdateClusterResponse {
    public String contentType;
    public UpdateClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object ec2RequestFailedException;
    public UpdateClusterResponse withEc2RequestFailedException(Object ec2RequestFailedException) {
        this.ec2RequestFailedException = ec2RequestFailedException;
        return this;
    }
    public Object invalidInputCombinationException;
    public UpdateClusterResponse withInvalidInputCombinationException(Object invalidInputCombinationException) {
        this.invalidInputCombinationException = invalidInputCombinationException;
        return this;
    }
    public Object invalidJobStateException;
    public UpdateClusterResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object invalidResourceException;
    public UpdateClusterResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Object kmsRequestFailedException;
    public UpdateClusterResponse withKmsRequestFailedException(Object kmsRequestFailedException) {
        this.kmsRequestFailedException = kmsRequestFailedException;
        return this;
    }
    public Long statusCode;
    public UpdateClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateClusterResult;
    public UpdateClusterResponse withUpdateClusterResult(java.util.Map<String, Object> updateClusterResult) {
        this.updateClusterResult = updateClusterResult;
        return this;
    }
}