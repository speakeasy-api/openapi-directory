package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateStickerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=s")
    public String s;
    public TranslateStickerQueryParams withS(String s) {
        this.s = s;
        return this;
    }
}