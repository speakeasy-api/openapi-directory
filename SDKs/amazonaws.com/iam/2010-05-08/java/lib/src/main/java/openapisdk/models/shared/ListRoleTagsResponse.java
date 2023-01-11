package openapisdk.models.shared;



public class ListRoleTagsResponse {
    public Boolean isTruncated;
    public ListRoleTagsResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListRoleTagsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Tag[] tags;
    public ListRoleTagsResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}