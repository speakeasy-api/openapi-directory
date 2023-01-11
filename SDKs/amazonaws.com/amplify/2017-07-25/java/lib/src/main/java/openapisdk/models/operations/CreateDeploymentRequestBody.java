package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeploymentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileMap")
    public java.util.Map<String, String> fileMap;
    public CreateDeploymentRequestBody withFileMap(java.util.Map<String, String> fileMap) {
        this.fileMap = fileMap;
        return this;
    }
}