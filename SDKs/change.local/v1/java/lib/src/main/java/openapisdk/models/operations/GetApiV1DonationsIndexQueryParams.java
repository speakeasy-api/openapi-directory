package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1DonationsIndexQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetApiV1DonationsIndexQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
}