package openapisdk.models.operations;



public class DescribeEventsResponse {
    public String contentType;
    public DescribeEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEventsResponse describeEventsResponse;
    public DescribeEventsResponse withDescribeEventsResponse(openapisdk.models.shared.DescribeEventsResponse describeEventsResponse) {
        this.describeEventsResponse = describeEventsResponse;
        return this;
    }
    public Long statusCode;
    public DescribeEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}