package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShakespeareGenerateInsultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetShakespeareGenerateInsultQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}