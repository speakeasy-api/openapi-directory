package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateImageRequest {
    public UpdateImagePathParams pathParams;
    public UpdateImageRequest withPathParams(UpdateImagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21imagesPostRequestBodyContentApplication1jsonSchemaAllOf0 request;
    public UpdateImageRequest withRequest(openapisdk.models.shared.Onev21imagesPostRequestBodyContentApplication1jsonSchemaAllOf0 request) {
        this.request = request;
        return this;
    }
}