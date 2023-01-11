package openapisdk.models.shared;



public class ListInstanceProfileTagsResponse {
    public Boolean isTruncated;
    public ListInstanceProfileTagsResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListInstanceProfileTagsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Tag[] tags;
    public ListInstanceProfileTagsResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}