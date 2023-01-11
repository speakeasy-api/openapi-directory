package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AvatarsGetImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public Integer height;
    public AvatarsGetImageQueryParams withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public AvatarsGetImageQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Integer width;
    public AvatarsGetImageQueryParams withWidth(Integer width) {
        this.width = width;
        return this;
    }
}