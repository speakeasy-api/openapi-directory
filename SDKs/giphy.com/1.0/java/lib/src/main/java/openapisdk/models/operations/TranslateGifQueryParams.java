package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateGifQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=s")
    public String s;
    public TranslateGifQueryParams withS(String s) {
        this.s = s;
        return this;
    }
}