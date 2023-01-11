package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RejectDirectDebitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=directDebitUuid")
    public String directDebitUuid;
    public RejectDirectDebitPathParams withDirectDebitUuid(String directDebitUuid) {
        this.directDebitUuid = directDebitUuid;
        return this;
    }
}