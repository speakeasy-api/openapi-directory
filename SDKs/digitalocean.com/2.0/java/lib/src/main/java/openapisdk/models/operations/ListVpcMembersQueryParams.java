package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVpcMembersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListVpcMembersQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ListVpcMembersQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resource_type")
    public String resourceType;
    public ListVpcMembersQueryParams withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}