package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyDeepsearchLeiQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public CompanyDeepsearchLeiQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
}