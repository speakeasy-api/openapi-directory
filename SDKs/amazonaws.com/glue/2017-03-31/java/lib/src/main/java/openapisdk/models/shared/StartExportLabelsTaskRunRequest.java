package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartExportLabelsTaskRunRequest {
    @JsonProperty("OutputS3Path")
    public String outputS3Path;
    public StartExportLabelsTaskRunRequest withOutputS3Path(String outputS3Path) {
        this.outputS3Path = outputS3Path;
        return this;
    }
    @JsonProperty("TransformId")
    public String transformId;
    public StartExportLabelsTaskRunRequest withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}