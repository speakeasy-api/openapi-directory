package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountArticleReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group_id")
    public Long groupId;
    public AccountArticleReportQueryParams withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
}