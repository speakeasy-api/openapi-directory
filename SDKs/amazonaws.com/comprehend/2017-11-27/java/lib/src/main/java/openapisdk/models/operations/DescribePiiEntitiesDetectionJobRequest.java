package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePiiEntitiesDetectionJobRequest {
    public DescribePiiEntitiesDetectionJobHeaders headers;
    public DescribePiiEntitiesDetectionJobRequest withHeaders(DescribePiiEntitiesDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePiiEntitiesDetectionJobRequest request;
    public DescribePiiEntitiesDetectionJobRequest withRequest(openapisdk.models.shared.DescribePiiEntitiesDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}