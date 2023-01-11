package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUploadUrlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importId")
    public String importId;
    public CreateUploadUrlResponse withImportId(String importId) {
        this.importId = importId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadUrl")
    public String uploadUrl;
    public CreateUploadUrlResponse withUploadUrl(String uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    }
}