package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IbanBasicRequestBody {
    @SpeakeasyMetadata("form:name=ibanNumber")
    public String ibanNumber;
    public IbanBasicRequestBody withIbanNumber(String ibanNumber) {
        this.ibanNumber = ibanNumber;
        return this;
    }
}