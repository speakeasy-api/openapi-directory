package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DecodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vin")
    public String vin;
    public DecodePathParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
}