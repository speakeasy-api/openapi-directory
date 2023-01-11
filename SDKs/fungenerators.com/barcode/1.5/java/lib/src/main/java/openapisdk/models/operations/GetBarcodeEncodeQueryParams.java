package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBarcodeEncodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=barcodeformat")
    public String barcodeformat;
    public GetBarcodeEncodeQueryParams withBarcodeformat(String barcodeformat) {
        this.barcodeformat = barcodeformat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public String number;
    public GetBarcodeEncodeQueryParams withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputformat")
    public String outputformat;
    public GetBarcodeEncodeQueryParams withOutputformat(String outputformat) {
        this.outputformat = outputformat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=totalheight")
    public Long totalheight;
    public GetBarcodeEncodeQueryParams withTotalheight(Long totalheight) {
        this.totalheight = totalheight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=widthfactor")
    public Long widthfactor;
    public GetBarcodeEncodeQueryParams withWidthfactor(Long widthfactor) {
        this.widthfactor = widthfactor;
        return this;
    }
}