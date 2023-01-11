package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutObjectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentSHA256")
    public String contentSha256;
    public PutObjectResponse withContentSha256(String contentSha256) {
        this.contentSha256 = contentSha256;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ETag")
    public String eTag;
    public PutObjectResponse withETag(String eTag) {
        this.eTag = eTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageClass")
    public StorageClassEnum storageClass;
    public PutObjectResponse withStorageClass(StorageClassEnum storageClass) {
        this.storageClass = storageClass;
        return this;
    }
}