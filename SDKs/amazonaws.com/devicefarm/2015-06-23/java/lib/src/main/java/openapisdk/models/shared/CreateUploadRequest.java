package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateUploadRequest
 * Represents a request to the create upload operation.
**/
public class CreateUploadRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public String contentType;
    public CreateUploadRequest withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateUploadRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("projectArn")
    public String projectArn;
    public CreateUploadRequest withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    @JsonProperty("type")
    public UploadTypeEnum type;
    public CreateUploadRequest withType(UploadTypeEnum type) {
        this.type = type;
        return this;
    }
}