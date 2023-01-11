package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetUploadResult
 * Represents the result of a get upload request.
**/
public class GetUploadResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload")
    public Upload upload;
    public GetUploadResult withUpload(Upload upload) {
        this.upload = upload;
        return this;
    }
}