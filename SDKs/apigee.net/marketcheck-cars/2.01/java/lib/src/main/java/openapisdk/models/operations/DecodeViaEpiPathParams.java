package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DecodeViaEpiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vin")
    public String vin;
    public DecodeViaEpiPathParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
}