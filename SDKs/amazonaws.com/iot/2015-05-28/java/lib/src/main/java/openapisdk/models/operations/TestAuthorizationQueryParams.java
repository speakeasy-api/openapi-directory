package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestAuthorizationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientId")
    public String clientId;
    public TestAuthorizationQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}