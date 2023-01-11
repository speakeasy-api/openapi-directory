package openapisdk.models.operations;



public class DescribeExportTasksResponse {
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
    public Object invalidParameterException;
    public DescribeExportTasksResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeExportTasksResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeExportTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}