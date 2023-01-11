package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateDataSetRequest {
    public GenerateDataSetHeaders headers;
    public GenerateDataSetRequest withHeaders(GenerateDataSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateDataSetRequest request;
    public GenerateDataSetRequest withRequest(openapisdk.models.shared.GenerateDataSetRequest request) {
        this.request = request;
        return this;
    }
}