package openapisdk.models.operations;



public class DescribeVaultResponse {
    public String contentType;
    public DescribeVaultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeVaultOutput describeVaultOutput;
    public DescribeVaultResponse withDescribeVaultOutput(openapisdk.models.shared.DescribeVaultOutput describeVaultOutput) {
        this.describeVaultOutput = describeVaultOutput;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeVaultResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public DescribeVaultResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeVaultResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeVaultResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeVaultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}