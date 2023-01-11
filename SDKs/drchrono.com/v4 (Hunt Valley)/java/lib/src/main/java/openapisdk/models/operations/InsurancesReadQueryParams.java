package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InsurancesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payer_type")
    public String payerType;
    public InsurancesReadQueryParams withPayerType(String payerType) {
        this.payerType = payerType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=term")
    public String term;
    public InsurancesReadQueryParams withTerm(String term) {
        this.term = term;
        return this;
    }
}