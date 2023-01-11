package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPirateTranslateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public GetPirateTranslateQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}