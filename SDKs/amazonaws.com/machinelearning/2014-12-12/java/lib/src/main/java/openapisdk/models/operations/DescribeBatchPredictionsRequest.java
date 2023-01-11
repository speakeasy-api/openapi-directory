package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBatchPredictionsRequest {
    public DescribeBatchPredictionsQueryParams queryParams;
    public DescribeBatchPredictionsRequest withQueryParams(DescribeBatchPredictionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeBatchPredictionsHeaders headers;
    public DescribeBatchPredictionsRequest withHeaders(DescribeBatchPredictionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeBatchPredictionsInput request;
    public DescribeBatchPredictionsRequest withRequest(openapisdk.models.shared.DescribeBatchPredictionsInput request) {
        this.request = request;
        return this;
    }
}