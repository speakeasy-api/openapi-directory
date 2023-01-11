package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsUsernamePermissionsRepositoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetTeamsUsernamePermissionsRepositoriesQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetTeamsUsernamePermissionsRepositoriesQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}