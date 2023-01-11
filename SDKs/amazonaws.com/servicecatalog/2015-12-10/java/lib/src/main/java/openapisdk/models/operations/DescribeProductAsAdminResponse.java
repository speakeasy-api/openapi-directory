package openapisdk.models.operations;



public class DescribeProductAsAdminResponse {
    public String contentType;
    public DescribeProductAsAdminResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProductAsAdminOutput describeProductAsAdminOutput;
    public DescribeProductAsAdminResponse withDescribeProductAsAdminOutput(openapisdk.models.shared.DescribeProductAsAdminOutput describeProductAsAdminOutput) {
        this.describeProductAsAdminOutput = describeProductAsAdminOutput;
        return this;
    }
    public Object invalidParametersException;
    public DescribeProductAsAdminResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProductAsAdminResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProductAsAdminResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}