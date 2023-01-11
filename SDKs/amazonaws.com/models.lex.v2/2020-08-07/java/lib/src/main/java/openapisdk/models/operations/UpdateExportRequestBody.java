package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateExportRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filePassword")
    public String filePassword;
    public UpdateExportRequestBody withFilePassword(String filePassword) {
        this.filePassword = filePassword;
        return this;
    }
}