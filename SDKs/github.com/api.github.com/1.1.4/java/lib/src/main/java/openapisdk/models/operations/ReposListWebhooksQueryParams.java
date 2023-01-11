package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListWebhooksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReposListWebhooksQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReposListWebhooksQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}