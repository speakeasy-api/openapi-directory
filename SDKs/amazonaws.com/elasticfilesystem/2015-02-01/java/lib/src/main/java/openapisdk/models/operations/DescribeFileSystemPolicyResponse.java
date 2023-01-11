package openapisdk.models.operations;



public class DescribeFileSystemPolicyResponse {
    public String contentType;
    public DescribeFileSystemPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemNotFound;
    public DescribeFileSystemPolicyResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public openapisdk.models.shared.FileSystemPolicyDescription fileSystemPolicyDescription;
    public DescribeFileSystemPolicyResponse withFileSystemPolicyDescription(openapisdk.models.shared.FileSystemPolicyDescription fileSystemPolicyDescription) {
        this.fileSystemPolicyDescription = fileSystemPolicyDescription;
        return this;
    }
    public Object internalServerError;
    public DescribeFileSystemPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object policyNotFound;
    public DescribeFileSystemPolicyResponse withPolicyNotFound(Object policyNotFound) {
        this.policyNotFound = policyNotFound;
        return this;
    }
    public Long statusCode;
    public DescribeFileSystemPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}