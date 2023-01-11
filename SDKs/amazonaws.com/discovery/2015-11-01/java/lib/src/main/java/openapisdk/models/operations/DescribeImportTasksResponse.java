package openapisdk.models.operations;



public class DescribeImportTasksResponse {
    public Object authorizationErrorException;
    public DescribeImportTasksResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public DescribeImportTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeImportTasksResponse describeImportTasksResponse;
    public DescribeImportTasksResponse withDescribeImportTasksResponse(openapisdk.models.shared.DescribeImportTasksResponse describeImportTasksResponse) {
        this.describeImportTasksResponse = describeImportTasksResponse;
        return this;
    }
    public Object homeRegionNotSetException;
    public DescribeImportTasksResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeImportTasksResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeImportTasksResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serverInternalErrorException;
    public DescribeImportTasksResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public DescribeImportTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}