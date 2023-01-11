package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPirateGenerateInsultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetPirateGenerateInsultQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}