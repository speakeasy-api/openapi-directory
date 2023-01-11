package openapisdk.models.operations;



public class GetDescribeAlarmHistoryResponse {
    public byte[] body;
    public GetDescribeAlarmHistoryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeAlarmHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeAlarmHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}