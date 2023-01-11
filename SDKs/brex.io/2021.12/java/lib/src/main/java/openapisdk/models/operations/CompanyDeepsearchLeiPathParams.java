package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyDeepsearchLeiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=number")
    public String number;
    public CompanyDeepsearchLeiPathParams withNumber(String number) {
        this.number = number;
        return this;
    }
}