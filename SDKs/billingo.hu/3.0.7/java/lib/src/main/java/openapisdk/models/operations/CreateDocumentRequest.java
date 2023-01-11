package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDocumentRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DocumentInsert request;
    public CreateDocumentRequest withRequest(openapisdk.models.shared.DocumentInsert request) {
        this.request = request;
        return this;
    }
}