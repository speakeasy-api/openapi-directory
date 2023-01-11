package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PadUsersUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public PadUsersUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}