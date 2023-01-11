package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompaniesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public CompaniesUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}