package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EinVerificationComprehensiveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ein")
    public String ein;
    public EinVerificationComprehensiveQueryParams withEin(String ein) {
        this.ein = ein;
        return this;
    }
}