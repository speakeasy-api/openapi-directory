package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostErc20AddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public PostErc20AddressPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}