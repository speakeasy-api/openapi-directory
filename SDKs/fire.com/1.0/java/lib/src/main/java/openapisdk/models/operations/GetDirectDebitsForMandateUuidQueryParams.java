package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDirectDebitsForMandateUuidQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mandateUuid")
    public String mandateUuid;
    public GetDirectDebitsForMandateUuidQueryParams withMandateUuid(String mandateUuid) {
        this.mandateUuid = mandateUuid;
        return this;
    }
}