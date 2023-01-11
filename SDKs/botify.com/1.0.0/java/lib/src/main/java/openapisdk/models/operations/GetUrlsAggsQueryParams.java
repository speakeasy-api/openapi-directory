package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUrlsAggsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=area")
    public GetUrlsAggsAreaEnum area;
    public GetUrlsAggsQueryParams withArea(GetUrlsAggsAreaEnum area) {
        this.area = area;
        return this;
    }
}