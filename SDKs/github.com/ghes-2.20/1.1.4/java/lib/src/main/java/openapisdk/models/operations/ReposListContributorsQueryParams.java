package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListContributorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=anon")
    public String anon;
    public ReposListContributorsQueryParams withAnon(String anon) {
        this.anon = anon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReposListContributorsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReposListContributorsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}