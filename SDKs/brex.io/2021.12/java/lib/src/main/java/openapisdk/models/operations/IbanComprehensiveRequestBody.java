package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IbanComprehensiveRequestBody {
    @SpeakeasyMetadata("form:name=ibanNumber")
    public String ibanNumber;
    public IbanComprehensiveRequestBody withIbanNumber(String ibanNumber) {
        this.ibanNumber = ibanNumber;
        return this;
    }
}