package openapisdk.models.operations;



public class DescribeAccountPreferencesResponse {
    public String contentType;
    public DescribeAccountPreferencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAccountPreferencesResponse describeAccountPreferencesResponse;
    public DescribeAccountPreferencesResponse withDescribeAccountPreferencesResponse(openapisdk.models.shared.DescribeAccountPreferencesResponse describeAccountPreferencesResponse) {
        this.describeAccountPreferencesResponse = describeAccountPreferencesResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeAccountPreferencesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeAccountPreferencesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}