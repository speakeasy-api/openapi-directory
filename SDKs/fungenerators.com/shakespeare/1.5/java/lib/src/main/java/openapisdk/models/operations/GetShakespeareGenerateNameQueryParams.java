package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShakespeareGenerateNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetShakespeareGenerateNameQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=variation")
    public String variation;
    public GetShakespeareGenerateNameQueryParams withVariation(String variation) {
        this.variation = variation;
        return this;
    }
}