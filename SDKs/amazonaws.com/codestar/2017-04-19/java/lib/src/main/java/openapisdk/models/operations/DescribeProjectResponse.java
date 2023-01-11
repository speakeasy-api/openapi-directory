package openapisdk.models.operations;



public class DescribeProjectResponse {
    public Object concurrentModificationException;
    public DescribeProjectResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DescribeProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProjectResult describeProjectResult;
    public DescribeProjectResponse withDescribeProjectResult(openapisdk.models.shared.DescribeProjectResult describeProjectResult) {
        this.describeProjectResult = describeProjectResult;
        return this;
    }
    public Object invalidServiceRoleException;
    public DescribeProjectResponse withInvalidServiceRoleException(Object invalidServiceRoleException) {
        this.invalidServiceRoleException = invalidServiceRoleException;
        return this;
    }
    public Object projectConfigurationException;
    public DescribeProjectResponse withProjectConfigurationException(Object projectConfigurationException) {
        this.projectConfigurationException = projectConfigurationException;
        return this;
    }
    public Object projectNotFoundException;
    public DescribeProjectResponse withProjectNotFoundException(Object projectNotFoundException) {
        this.projectNotFoundException = projectNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeProjectResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}