package openapisdk.models.shared;



public class ListServerCertificateTagsResponse {
    public Boolean isTruncated;
    public ListServerCertificateTagsResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListServerCertificateTagsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Tag[] tags;
    public ListServerCertificateTagsResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}