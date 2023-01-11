package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatasetContentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionId")
    public String versionId;
    public CreateDatasetContentResponse withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}