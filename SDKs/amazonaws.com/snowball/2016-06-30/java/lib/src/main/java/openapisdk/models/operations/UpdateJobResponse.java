package openapisdk.models.operations;



public class UpdateJobResponse {
    public Object clusterLimitExceededException;
    public UpdateJobResponse withClusterLimitExceededException(Object clusterLimitExceededException) {
        this.clusterLimitExceededException = clusterLimitExceededException;
        return this;
    }
    public String contentType;
    public UpdateJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object ec2RequestFailedException;
    public UpdateJobResponse withEc2RequestFailedException(Object ec2RequestFailedException) {
        this.ec2RequestFailedException = ec2RequestFailedException;
        return this;
    }
    public Object invalidInputCombinationException;
    public UpdateJobResponse withInvalidInputCombinationException(Object invalidInputCombinationException) {
        this.invalidInputCombinationException = invalidInputCombinationException;
        return this;
    }
    public Object invalidJobStateException;
    public UpdateJobResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object invalidResourceException;
    public UpdateJobResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Object kmsRequestFailedException;
    public UpdateJobResponse withKmsRequestFailedException(Object kmsRequestFailedException) {
        this.kmsRequestFailedException = kmsRequestFailedException;
        return this;
    }
    public Long statusCode;
    public UpdateJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateJobResult;
    public UpdateJobResponse withUpdateJobResult(java.util.Map<String, Object> updateJobResult) {
        this.updateJobResult = updateJobResult;
        return this;
    }
}