package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListOfIssuedDocumentsVersion1IdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerAuth bearerAuth;
    public GetListOfIssuedDocumentsVersion1IdSecurity withBearerAuth(openapisdk.models.shared.SchemeBearerAuth bearerAuth) {
        this.bearerAuth = bearerAuth;
        return this;
    }
}