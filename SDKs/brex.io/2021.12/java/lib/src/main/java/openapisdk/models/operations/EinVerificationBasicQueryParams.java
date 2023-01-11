package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EinVerificationBasicQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ein")
    public String ein;
    public EinVerificationBasicQueryParams withEin(String ein) {
        this.ein = ein;
        return this;
    }
}