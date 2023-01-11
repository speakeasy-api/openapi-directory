package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListBranchesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReposListBranchesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReposListBranchesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=protected")
    public Boolean protected_;
    public ReposListBranchesQueryParams withProtected(Boolean protected_) {
        this.protected_ = protected_;
        return this;
    }
}