package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ZebraGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public String format;
    public ZebraGetQueryParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public Long height;
    public ZebraGetQueryParams withHeight(Long height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showlabel")
    public Boolean showlabel;
    public ZebraGetQueryParams withShowlabel(Boolean showlabel) {
        this.showlabel = showlabel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=value")
    public String value;
    public ZebraGetQueryParams withValue(String value) {
        this.value = value;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Long width;
    public ZebraGetQueryParams withWidth(Long width) {
        this.width = width;
        return this;
    }
}