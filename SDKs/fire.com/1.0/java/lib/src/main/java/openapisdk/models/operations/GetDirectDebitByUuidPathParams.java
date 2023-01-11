package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDirectDebitByUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=directDebitUuid")
    public String directDebitUuid;
    public GetDirectDebitByUuidPathParams withDirectDebitUuid(String directDebitUuid) {
        this.directDebitUuid = directDebitUuid;
        return this;
    }
}