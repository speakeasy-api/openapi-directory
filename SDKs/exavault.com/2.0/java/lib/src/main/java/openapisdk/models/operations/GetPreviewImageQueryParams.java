package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPreviewImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public Integer height;
    public GetPreviewImageQueryParams withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetPreviewImageQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resource")
    public String resource;
    public GetPreviewImageQueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public GetPreviewImageSizeEnum size;
    public GetPreviewImageQueryParams withSize(GetPreviewImageSizeEnum size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Integer width;
    public GetPreviewImageQueryParams withWidth(Integer width) {
        this.width = width;
        return this;
    }
}