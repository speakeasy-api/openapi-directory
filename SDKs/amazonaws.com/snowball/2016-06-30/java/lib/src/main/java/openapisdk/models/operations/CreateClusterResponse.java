package openapisdk.models.operations;



public class CreateClusterResponse {
    public String contentType;
    public CreateClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateClusterResult createClusterResult;
    public CreateClusterResponse withCreateClusterResult(openapisdk.models.shared.CreateClusterResult createClusterResult) {
        this.createClusterResult = createClusterResult;
        return this;
    }
    public Object ec2RequestFailedException;
    public CreateClusterResponse withEc2RequestFailedException(Object ec2RequestFailedException) {
        this.ec2RequestFailedException = ec2RequestFailedException;
        return this;
    }
    public Object invalidInputCombinationException;
    public CreateClusterResponse withInvalidInputCombinationException(Object invalidInputCombinationException) {
        this.invalidInputCombinationException = invalidInputCombinationException;
        return this;
    }
    public Object invalidResourceException;
    public CreateClusterResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Object kmsRequestFailedException;
    public CreateClusterResponse withKmsRequestFailedException(Object kmsRequestFailedException) {
        this.kmsRequestFailedException = kmsRequestFailedException;
        return this;
    }
    public Long statusCode;
    public CreateClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}