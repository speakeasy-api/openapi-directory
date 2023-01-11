package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompaniesDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public CompaniesDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}