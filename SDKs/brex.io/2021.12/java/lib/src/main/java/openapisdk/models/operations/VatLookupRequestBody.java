package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatLookupRequestBody {
    @SpeakeasyMetadata("form:name=address")
    public String address;
    public VatLookupRequestBody withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("form:name=name")
    public String name;
    public VatLookupRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}