package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InventoryCategoriesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public InventoryCategoriesReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public InventoryCategoriesReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}