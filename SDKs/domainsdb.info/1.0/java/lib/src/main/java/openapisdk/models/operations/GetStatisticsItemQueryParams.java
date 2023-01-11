package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatisticsItemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetStatisticsItemQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetStatisticsItemQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
}