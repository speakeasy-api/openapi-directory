package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFileUploadUrlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileUploadURL")
    public String fileUploadURL;
    public GetFileUploadUrlResponse withFileUploadUrl(String fileUploadURL) {
        this.fileUploadURL = fileUploadURL;
        return this;
    }
}