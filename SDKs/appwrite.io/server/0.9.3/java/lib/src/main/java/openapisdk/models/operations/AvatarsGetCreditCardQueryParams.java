package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AvatarsGetCreditCardQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public Integer height;
    public AvatarsGetCreditCardQueryParams withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quality")
    public Integer quality;
    public AvatarsGetCreditCardQueryParams withQuality(Integer quality) {
        this.quality = quality;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Integer width;
    public AvatarsGetCreditCardQueryParams withWidth(Integer width) {
        this.width = width;
        return this;
    }
}