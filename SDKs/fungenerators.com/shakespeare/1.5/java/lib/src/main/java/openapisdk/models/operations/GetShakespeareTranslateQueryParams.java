package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShakespeareTranslateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public GetShakespeareTranslateQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}