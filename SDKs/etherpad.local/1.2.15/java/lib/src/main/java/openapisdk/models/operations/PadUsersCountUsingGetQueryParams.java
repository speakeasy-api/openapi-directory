package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PadUsersCountUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public PadUsersCountUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}