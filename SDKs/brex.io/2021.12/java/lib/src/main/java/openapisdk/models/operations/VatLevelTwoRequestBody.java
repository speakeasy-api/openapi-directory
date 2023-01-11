package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatLevelTwoRequestBody {
    @SpeakeasyMetadata("form:name=confirmation")
    public Boolean confirmation;
    public VatLevelTwoRequestBody withConfirmation(Boolean confirmation) {
        this.confirmation = confirmation;
        return this;
    }
    @SpeakeasyMetadata("form:name=vatNumber")
    public String vatNumber;
    public VatLevelTwoRequestBody withVatNumber(String vatNumber) {
        this.vatNumber = vatNumber;
        return this;
    }
}