package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMandateAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mandateUuid")
    public String mandateUuid;
    public UpdateMandateAliasPathParams withMandateUuid(String mandateUuid) {
        this.mandateUuid = mandateUuid;
        return this;
    }
}