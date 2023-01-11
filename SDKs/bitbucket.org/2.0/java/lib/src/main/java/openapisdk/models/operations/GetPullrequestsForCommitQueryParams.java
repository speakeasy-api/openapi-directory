package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPullrequestsForCommitQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetPullrequestsForCommitQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagelen")
    public Integer pagelen;
    public GetPullrequestsForCommitQueryParams withPagelen(Integer pagelen) {
        this.pagelen = pagelen;
        return this;
    }
}