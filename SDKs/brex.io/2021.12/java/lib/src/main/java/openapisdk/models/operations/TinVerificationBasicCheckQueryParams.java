package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TinVerificationBasicCheckQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public TinVerificationBasicCheckQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tin")
    public String tin;
    public TinVerificationBasicCheckQueryParams withTin(String tin) {
        this.tin = tin;
        return this;
    }
}