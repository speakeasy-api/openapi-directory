package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatasetContentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionId")
    public String versionId;
    public CreateDatasetContentRequestBody withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}