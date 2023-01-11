package openapisdk.models.operations;



public class PostDescribeExportTasksResponse {
    public byte[] body;
    public PostDescribeExportTasksResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeExportTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeExportTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}