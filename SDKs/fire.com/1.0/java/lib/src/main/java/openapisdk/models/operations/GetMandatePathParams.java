package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMandatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mandateUuid")
    public String mandateUuid;
    public GetMandatePathParams withMandateUuid(String mandateUuid) {
        this.mandateUuid = mandateUuid;
        return this;
    }
}