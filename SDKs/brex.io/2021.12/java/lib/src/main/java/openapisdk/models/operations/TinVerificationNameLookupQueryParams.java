package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TinVerificationNameLookupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tin")
    public String tin;
    public TinVerificationNameLookupQueryParams withTin(String tin) {
        this.tin = tin;
        return this;
    }
}