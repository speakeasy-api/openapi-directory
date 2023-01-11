package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUrlsDatamodelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=area")
    public GetUrlsDatamodelAreaEnum area;
    public GetUrlsDatamodelQueryParams withArea(GetUrlsDatamodelAreaEnum area) {
        this.area = area;
        return this;
    }
}