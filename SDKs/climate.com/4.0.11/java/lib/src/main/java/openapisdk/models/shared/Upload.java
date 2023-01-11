package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Upload
 * Client request to upload data for a user.
**/
public class Upload {
    @JsonProperty("contentType")
    public UploadContentTypeEnum contentType;
    public Upload withContentType(UploadContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonProperty("length")
    public Long length;
    public Upload withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonProperty("md5")
    public String md5;
    public Upload withMd5(String md5) {
        this.md5 = md5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public Upload withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
}