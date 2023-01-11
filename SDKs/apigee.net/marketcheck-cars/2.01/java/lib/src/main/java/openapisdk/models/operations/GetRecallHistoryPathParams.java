package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecallHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vin")
    public String vin;
    public GetRecallHistoryPathParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
}