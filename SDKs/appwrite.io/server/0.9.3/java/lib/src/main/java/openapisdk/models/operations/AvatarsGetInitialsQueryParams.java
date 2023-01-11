package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AvatarsGetInitialsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=background")
    public String background;
    public AvatarsGetInitialsQueryParams withBackground(String background) {
        this.background = background;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=color")
    public String color;
    public AvatarsGetInitialsQueryParams withColor(String color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public Integer height;
    public AvatarsGetInitialsQueryParams withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public AvatarsGetInitialsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Integer width;
    public AvatarsGetInitialsQueryParams withWidth(Integer width) {
        this.width = width;
        return this;
    }
}