package openapisdk.models.shared;



public class ListUserTagsResponse {
    public Boolean isTruncated;
    public ListUserTagsResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListUserTagsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Tag[] tags;
    public ListUserTagsResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}