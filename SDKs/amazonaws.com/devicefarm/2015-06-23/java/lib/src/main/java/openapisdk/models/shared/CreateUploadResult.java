package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateUploadResult
 * Represents the result of a create upload request.
**/
public class CreateUploadResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload")
    public Upload upload;
    public CreateUploadResult withUpload(Upload upload) {
        this.upload = upload;
        return this;
    }
}