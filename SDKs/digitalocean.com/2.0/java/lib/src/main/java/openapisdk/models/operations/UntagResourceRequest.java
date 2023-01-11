package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourceRequest {
    public UntagResourcePathParams pathParams;
    public UntagResourceRequest withPathParams(UntagResourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21tags1Percent7BtagIdPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema request;
    public UntagResourceRequest withRequest(openapisdk.models.shared.Onev21tags1Percent7BtagIdPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema request) {
        this.request = request;
        return this;
    }
}