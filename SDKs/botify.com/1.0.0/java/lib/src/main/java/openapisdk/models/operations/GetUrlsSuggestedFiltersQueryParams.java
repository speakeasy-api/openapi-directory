package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUrlsSuggestedFiltersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=area")
    public GetUrlsSuggestedFiltersAreaEnum area;
    public GetUrlsSuggestedFiltersQueryParams withArea(GetUrlsSuggestedFiltersAreaEnum area) {
        this.area = area;
        return this;
    }
}