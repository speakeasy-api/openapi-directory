package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPirateGenerateLoremIpsumQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetPirateGenerateLoremIpsumQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public GetPirateGenerateLoremIpsumQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}