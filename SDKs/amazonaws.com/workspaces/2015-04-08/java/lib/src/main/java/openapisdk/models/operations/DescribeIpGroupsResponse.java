package openapisdk.models.operations;



public class DescribeIpGroupsResponse {
    public Object accessDeniedException;
    public DescribeIpGroupsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeIpGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeIpGroupsResult describeIpGroupsResult;
    public DescribeIpGroupsResponse withDescribeIpGroupsResult(openapisdk.models.shared.DescribeIpGroupsResult describeIpGroupsResult) {
        this.describeIpGroupsResult = describeIpGroupsResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DescribeIpGroupsResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Long statusCode;
    public DescribeIpGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}