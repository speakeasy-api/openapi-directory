package openapisdk.models.operations;



public class ActivityGetFeedsResponse {
    public String contentType;
    public ActivityGetFeedsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityGetFeedsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Feed feed;
    public ActivityGetFeedsResponse withFeed(openapisdk.models.shared.Feed feed) {
        this.feed = feed;
        return this;
    }
}