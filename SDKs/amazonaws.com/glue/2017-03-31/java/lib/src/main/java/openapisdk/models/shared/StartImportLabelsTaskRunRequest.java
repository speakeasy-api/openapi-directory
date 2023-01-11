package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartImportLabelsTaskRunRequest {
    @JsonProperty("InputS3Path")
    public String inputS3Path;
    public StartImportLabelsTaskRunRequest withInputS3Path(String inputS3Path) {
        this.inputS3Path = inputS3Path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplaceAllLabels")
    public Boolean replaceAllLabels;
    public StartImportLabelsTaskRunRequest withReplaceAllLabels(Boolean replaceAllLabels) {
        this.replaceAllLabels = replaceAllLabels;
        return this;
    }
    @JsonProperty("TransformId")
    public String transformId;
    public StartImportLabelsTaskRunRequest withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}