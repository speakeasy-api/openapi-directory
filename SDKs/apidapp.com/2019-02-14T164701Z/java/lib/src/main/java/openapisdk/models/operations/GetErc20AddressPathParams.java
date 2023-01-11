package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetErc20AddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public GetErc20AddressPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}