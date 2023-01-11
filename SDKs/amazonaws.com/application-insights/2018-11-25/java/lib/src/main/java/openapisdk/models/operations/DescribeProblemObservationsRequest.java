package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProblemObservationsRequest {
    public DescribeProblemObservationsHeaders headers;
    public DescribeProblemObservationsRequest withHeaders(DescribeProblemObservationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProblemObservationsRequest request;
    public DescribeProblemObservationsRequest withRequest(openapisdk.models.shared.DescribeProblemObservationsRequest request) {
        this.request = request;
        return this;
    }
}