package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceDetailsByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceID")
    public String serviceID;
    public GetServiceDetailsByIdPathParams withServiceId(String serviceID) {
        this.serviceID = serviceID;
        return this;
    }
}