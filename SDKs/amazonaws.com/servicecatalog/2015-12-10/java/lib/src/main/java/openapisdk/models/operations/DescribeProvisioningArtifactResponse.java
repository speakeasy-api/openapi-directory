package openapisdk.models.operations;



public class DescribeProvisioningArtifactResponse {
    public String contentType;
    public DescribeProvisioningArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProvisioningArtifactOutput describeProvisioningArtifactOutput;
    public DescribeProvisioningArtifactResponse withDescribeProvisioningArtifactOutput(openapisdk.models.shared.DescribeProvisioningArtifactOutput describeProvisioningArtifactOutput) {
        this.describeProvisioningArtifactOutput = describeProvisioningArtifactOutput;
        return this;
    }
    public Object invalidParametersException;
    public DescribeProvisioningArtifactResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProvisioningArtifactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProvisioningArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}