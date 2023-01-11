package openapisdk.models.operations;



public class DescribeExportTasksResponse {
    public Object authorizationErrorException;
    public DescribeExportTasksResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public DescribeExportTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeExportTasksResponse describeExportTasksResponse;
    public DescribeExportTasksResponse withDescribeExportTasksResponse(openapisdk.models.shared.DescribeExportTasksResponse describeExportTasksResponse) {
        this.describeExportTasksResponse = describeExportTasksResponse;
        return this;
    }
    public Object homeRegionNotSetException;
    public DescribeExportTasksResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeExportTasksResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeExportTasksResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serverInternalErrorException;
    public DescribeExportTasksResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public DescribeExportTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}