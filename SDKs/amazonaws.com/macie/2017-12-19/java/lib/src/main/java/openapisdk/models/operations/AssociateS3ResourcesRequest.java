package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateS3ResourcesRequest {
    public AssociateS3ResourcesHeaders headers;
    public AssociateS3ResourcesRequest withHeaders(AssociateS3ResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateS3ResourcesRequest request;
    public AssociateS3ResourcesRequest withRequest(openapisdk.models.shared.AssociateS3ResourcesRequest request) {
        this.request = request;
        return this;
    }
}