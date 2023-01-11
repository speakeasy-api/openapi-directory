package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanySearchNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public CompanySearchNumberQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}