package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUrlsExportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=area")
    public CreateUrlsExportAreaEnum area;
    public CreateUrlsExportQueryParams withArea(CreateUrlsExportAreaEnum area) {
        this.area = area;
        return this;
    }
}