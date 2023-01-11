package openapisdk.models.shared;



public class ListMfaDeviceTagsResponse {
    public Boolean isTruncated;
    public ListMfaDeviceTagsResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListMfaDeviceTagsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Tag[] tags;
    public ListMfaDeviceTagsResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}