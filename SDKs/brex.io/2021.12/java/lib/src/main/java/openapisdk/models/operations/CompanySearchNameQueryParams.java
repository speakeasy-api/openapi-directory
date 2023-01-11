package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanySearchNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public CompanySearchNameQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}