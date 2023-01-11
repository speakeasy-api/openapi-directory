package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OauthAuthorizationsListAuthorizationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=client_id")
    public String clientId;
    public OauthAuthorizationsListAuthorizationsQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public OauthAuthorizationsListAuthorizationsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public OauthAuthorizationsListAuthorizationsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}