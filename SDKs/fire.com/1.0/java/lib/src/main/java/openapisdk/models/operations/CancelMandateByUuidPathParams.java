package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelMandateByUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mandateUuid")
    public String mandateUuid;
    public CancelMandateByUuidPathParams withMandateUuid(String mandateUuid) {
        this.mandateUuid = mandateUuid;
        return this;
    }
}