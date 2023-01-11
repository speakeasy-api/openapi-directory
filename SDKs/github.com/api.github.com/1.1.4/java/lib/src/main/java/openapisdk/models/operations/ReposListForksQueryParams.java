package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListForksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=org")
    public String org;
    public ReposListForksQueryParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=organization")
    public String organization;
    public ReposListForksQueryParams withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReposListForksQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReposListForksQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.RepoEnum1 sort;
    public ReposListForksQueryParams withSort(openapisdk.models.shared.RepoEnum1 sort) {
        this.sort = sort;
        return this;
    }
}