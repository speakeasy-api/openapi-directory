package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageGetFilePreviewQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=background")
    public String background;
    public StorageGetFilePreviewQueryParams withBackground(String background) {
        this.background = background;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=borderColor")
    public String borderColor;
    public StorageGetFilePreviewQueryParams withBorderColor(String borderColor) {
        this.borderColor = borderColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=borderRadius")
    public Integer borderRadius;
    public StorageGetFilePreviewQueryParams withBorderRadius(Integer borderRadius) {
        this.borderRadius = borderRadius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=borderWidth")
    public Integer borderWidth;
    public StorageGetFilePreviewQueryParams withBorderWidth(Integer borderWidth) {
        this.borderWidth = borderWidth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gravity")
    public String gravity;
    public StorageGetFilePreviewQueryParams withGravity(String gravity) {
        this.gravity = gravity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public Integer height;
    public StorageGetFilePreviewQueryParams withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opacity")
    public Float opacity;
    public StorageGetFilePreviewQueryParams withOpacity(Float opacity) {
        this.opacity = opacity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=output")
    public String output;
    public StorageGetFilePreviewQueryParams withOutput(String output) {
        this.output = output;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quality")
    public Integer quality;
    public StorageGetFilePreviewQueryParams withQuality(Integer quality) {
        this.quality = quality;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rotation")
    public Integer rotation;
    public StorageGetFilePreviewQueryParams withRotation(Integer rotation) {
        this.rotation = rotation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Integer width;
    public StorageGetFilePreviewQueryParams withWidth(Integer width) {
        this.width = width;
        return this;
    }
}