package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateUploadRequest {
    @JsonProperty("arn")
    public String arn;
    public UpdateUploadRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public String contentType;
    public UpdateUploadRequest withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editContent")
    public Boolean editContent;
    public UpdateUploadRequest withEditContent(Boolean editContent) {
        this.editContent = editContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateUploadRequest withName(String name) {
        this.name = name;
        return this;
    }
}