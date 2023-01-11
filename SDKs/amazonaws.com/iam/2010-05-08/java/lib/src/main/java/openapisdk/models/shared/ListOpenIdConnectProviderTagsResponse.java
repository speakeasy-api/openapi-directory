package openapisdk.models.shared;



public class ListOpenIdConnectProviderTagsResponse {
    public Boolean isTruncated;
    public ListOpenIdConnectProviderTagsResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListOpenIdConnectProviderTagsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Tag[] tags;
    public ListOpenIdConnectProviderTagsResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}