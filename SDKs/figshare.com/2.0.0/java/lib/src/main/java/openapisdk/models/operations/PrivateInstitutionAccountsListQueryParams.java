package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateInstitutionAccountsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public PrivateInstitutionAccountsListQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=institution_user_id")
    public String institutionUserId;
    public PrivateInstitutionAccountsListQueryParams withInstitutionUserId(String institutionUserId) {
        this.institutionUserId = institutionUserId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_active")
    public Long isActive;
    public PrivateInstitutionAccountsListQueryParams withIsActive(Long isActive) {
        this.isActive = isActive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public PrivateInstitutionAccountsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public PrivateInstitutionAccountsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PrivateInstitutionAccountsListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public PrivateInstitutionAccountsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}