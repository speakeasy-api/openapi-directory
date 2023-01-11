package openapisdk.models.shared;



public class ListPolicyTagsResponse {
    public Boolean isTruncated;
    public ListPolicyTagsResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListPolicyTagsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Tag[] tags;
    public ListPolicyTagsResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}