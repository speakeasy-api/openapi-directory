package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateUploadResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload")
    public Upload upload;
    public UpdateUploadResult withUpload(Upload upload) {
        this.upload = upload;
        return this;
    }
}