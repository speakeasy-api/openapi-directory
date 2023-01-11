package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCarHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vin")
    public String vin;
    public GetCarHistoryPathParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
}