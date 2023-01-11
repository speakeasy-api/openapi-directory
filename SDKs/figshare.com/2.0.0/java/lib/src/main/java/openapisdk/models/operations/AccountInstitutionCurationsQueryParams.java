package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountInstitutionCurationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=article_id")
    public Long articleId;
    public AccountInstitutionCurationsQueryParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group_id")
    public Long groupId;
    public AccountInstitutionCurationsQueryParams withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public AccountInstitutionCurationsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public AccountInstitutionCurationsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public AccountInstitutionCurationsStatusEnum status;
    public AccountInstitutionCurationsQueryParams withStatus(AccountInstitutionCurationsStatusEnum status) {
        this.status = status;
        return this;
    }
}