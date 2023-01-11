package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListOfSelfUploadedDocumentsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerAuth bearerAuth;
    public GetListOfSelfUploadedDocumentsSecurity withBearerAuth(openapisdk.models.shared.SchemeBearerAuth bearerAuth) {
        this.bearerAuth = bearerAuth;
        return this;
    }
}