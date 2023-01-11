package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AvatarsGetFlagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public Integer height;
    public AvatarsGetFlagQueryParams withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quality")
    public Integer quality;
    public AvatarsGetFlagQueryParams withQuality(Integer quality) {
        this.quality = quality;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Integer width;
    public AvatarsGetFlagQueryParams withWidth(Integer width) {
        this.width = width;
        return this;
    }
}