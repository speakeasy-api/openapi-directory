package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisconnectVendorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vendor")
    public DisconnectVendorVendorEnum vendor;
    public DisconnectVendorPathParams withVendor(DisconnectVendorVendorEnum vendor) {
        this.vendor = vendor;
        return this;
    }
}