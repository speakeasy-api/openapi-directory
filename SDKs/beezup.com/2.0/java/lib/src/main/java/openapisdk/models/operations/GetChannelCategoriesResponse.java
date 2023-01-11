package openapisdk.models.operations;



public class GetChannelCategoriesResponse {
    public String contentType;
    public GetChannelCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetChannelCategoriesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetChannelCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelRootCategory channelRootCategory;
    public GetChannelCategoriesResponse withChannelRootCategory(openapisdk.models.shared.ChannelRootCategory channelRootCategory) {
        this.channelRootCategory = channelRootCategory;
        return this;
    }
}