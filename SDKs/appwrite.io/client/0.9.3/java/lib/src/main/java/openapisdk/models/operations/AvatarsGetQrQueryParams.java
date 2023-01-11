package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AvatarsGetQrQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=download")
    public Boolean download;
    public AvatarsGetQrQueryParams withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=margin")
    public Integer margin;
    public AvatarsGetQrQueryParams withMargin(Integer margin) {
        this.margin = margin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Integer size;
    public AvatarsGetQrQueryParams withSize(Integer size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public AvatarsGetQrQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}