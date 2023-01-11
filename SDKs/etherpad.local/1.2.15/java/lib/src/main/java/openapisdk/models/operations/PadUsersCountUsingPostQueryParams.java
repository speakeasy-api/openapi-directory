package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PadUsersCountUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public PadUsersCountUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}