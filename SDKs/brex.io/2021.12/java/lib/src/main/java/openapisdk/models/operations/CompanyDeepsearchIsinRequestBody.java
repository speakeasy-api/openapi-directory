package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyDeepsearchIsinRequestBody {
    @SpeakeasyMetadata("form:name=isin")
    public String isin;
    public CompanyDeepsearchIsinRequestBody withIsin(String isin) {
        this.isin = isin;
        return this;
    }
}