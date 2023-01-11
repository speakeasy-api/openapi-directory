package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartMlLabelingSetGenerationTaskRunRequest {
    @JsonProperty("OutputS3Path")
    public String outputS3Path;
    public StartMlLabelingSetGenerationTaskRunRequest withOutputS3Path(String outputS3Path) {
        this.outputS3Path = outputS3Path;
        return this;
    }
    @JsonProperty("TransformId")
    public String transformId;
    public StartMlLabelingSetGenerationTaskRunRequest withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}