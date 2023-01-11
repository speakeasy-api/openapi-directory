package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivateMandatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mandateUuid")
    public String mandateUuid;
    public ActivateMandatePathParams withMandateUuid(String mandateUuid) {
        this.mandateUuid = mandateUuid;
        return this;
    }
}