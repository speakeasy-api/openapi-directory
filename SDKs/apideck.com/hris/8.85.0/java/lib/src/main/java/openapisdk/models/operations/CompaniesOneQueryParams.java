package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompaniesOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public CompaniesOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}