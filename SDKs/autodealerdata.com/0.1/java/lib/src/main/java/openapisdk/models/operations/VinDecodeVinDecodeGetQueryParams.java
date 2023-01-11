package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VinDecodeVinDecodeGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeRecall")
    public Boolean includeRecall;
    public VinDecodeVinDecodeGetQueryParams withIncludeRecall(Boolean includeRecall) {
        this.includeRecall = includeRecall;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public VinDecodeVinDecodeGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=passEmpty")
    public Boolean passEmpty;
    public VinDecodeVinDecodeGetQueryParams withPassEmpty(Boolean passEmpty) {
        this.passEmpty = passEmpty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vin")
    public String vin;
    public VinDecodeVinDecodeGetQueryParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
}