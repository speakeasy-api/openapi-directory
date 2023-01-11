package openapisdk.models.shared;



/**
 * ListAccessKeysResponse
 * Contains the response to a successful <a>ListAccessKeys</a> request. 
**/
public class ListAccessKeysResponse {
    public AccessKeyMetadata[] accessKeyMetadata;
    public ListAccessKeysResponse withAccessKeyMetadata(AccessKeyMetadata[] accessKeyMetadata) {
        this.accessKeyMetadata = accessKeyMetadata;
        return this;
    }
    public Boolean isTruncated;
    public ListAccessKeysResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListAccessKeysResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}