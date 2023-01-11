package openapisdk.models.shared;



public class ListSamlProviderTagsResponse {
    public Boolean isTruncated;
    public ListSamlProviderTagsResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListSamlProviderTagsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Tag[] tags;
    public ListSamlProviderTagsResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}