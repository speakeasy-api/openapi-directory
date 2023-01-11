package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSsoStrategiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetSsoStrategiesQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetSsoStrategiesQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
}