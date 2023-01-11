package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateS3ResourcesRequest {
    public DisassociateS3ResourcesHeaders headers;
    public DisassociateS3ResourcesRequest withHeaders(DisassociateS3ResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateS3ResourcesRequest request;
    public DisassociateS3ResourcesRequest withRequest(openapisdk.models.shared.DisassociateS3ResourcesRequest request) {
        this.request = request;
        return this;
    }
}