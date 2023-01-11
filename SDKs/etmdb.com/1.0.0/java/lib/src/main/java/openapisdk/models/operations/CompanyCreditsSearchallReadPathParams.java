package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyCreditsSearchallReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=param")
    public String param;
    public CompanyCreditsSearchallReadPathParams withParam(String param) {
        this.param = param;
        return this;
    }
}