package openapisdk.models.operations;



public class CreateJobResponse {
    public Object clusterLimitExceededException;
    public CreateJobResponse withClusterLimitExceededException(Object clusterLimitExceededException) {
        this.clusterLimitExceededException = clusterLimitExceededException;
        return this;
    }
    public String contentType;
    public CreateJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateJobResult createJobResult;
    public CreateJobResponse withCreateJobResult(openapisdk.models.shared.CreateJobResult createJobResult) {
        this.createJobResult = createJobResult;
        return this;
    }
    public Object ec2RequestFailedException;
    public CreateJobResponse withEc2RequestFailedException(Object ec2RequestFailedException) {
        this.ec2RequestFailedException = ec2RequestFailedException;
        return this;
    }
    public Object invalidInputCombinationException;
    public CreateJobResponse withInvalidInputCombinationException(Object invalidInputCombinationException) {
        this.invalidInputCombinationException = invalidInputCombinationException;
        return this;
    }
    public Object invalidResourceException;
    public CreateJobResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Object kmsRequestFailedException;
    public CreateJobResponse withKmsRequestFailedException(Object kmsRequestFailedException) {
        this.kmsRequestFailedException = kmsRequestFailedException;
        return this;
    }
    public Long statusCode;
    public CreateJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}