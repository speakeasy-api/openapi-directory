package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartMlLabelingSetGenerationTaskRunRequest {
    public StartMlLabelingSetGenerationTaskRunHeaders headers;
    public StartMlLabelingSetGenerationTaskRunRequest withHeaders(StartMlLabelingSetGenerationTaskRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartMlLabelingSetGenerationTaskRunRequest request;
    public StartMlLabelingSetGenerationTaskRunRequest withRequest(openapisdk.models.shared.StartMlLabelingSetGenerationTaskRunRequest request) {
        this.request = request;
        return this;
    }
}