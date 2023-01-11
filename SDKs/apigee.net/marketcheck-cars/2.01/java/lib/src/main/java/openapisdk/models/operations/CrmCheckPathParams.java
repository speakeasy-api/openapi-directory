package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CrmCheckPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vin")
    public String vin;
    public CrmCheckPathParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
}