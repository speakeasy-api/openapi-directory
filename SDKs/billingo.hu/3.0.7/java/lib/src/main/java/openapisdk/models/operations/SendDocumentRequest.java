package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendDocumentRequest {
    public SendDocumentPathParams pathParams;
    public SendDocumentRequest withPathParams(SendDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendDocument request;
    public SendDocumentRequest withRequest(openapisdk.models.shared.SendDocument request) {
        this.request = request;
        return this;
    }
}