package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscriptionPushReportingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageNumber")
    public Long pageNumber;
    public GetSubscriptionPushReportingQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetSubscriptionPushReportingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}