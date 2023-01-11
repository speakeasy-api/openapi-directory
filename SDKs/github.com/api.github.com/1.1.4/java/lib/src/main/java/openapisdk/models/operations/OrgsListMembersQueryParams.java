package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListMembersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public openapisdk.models.shared.OrgEnum2 filter;
    public OrgsListMembersQueryParams withFilter(openapisdk.models.shared.OrgEnum2 filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public OrgsListMembersQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public OrgsListMembersQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public openapisdk.models.shared.OrgEnum3 role;
    public OrgsListMembersQueryParams withRole(openapisdk.models.shared.OrgEnum3 role) {
        this.role = role;
        return this;
    }
}