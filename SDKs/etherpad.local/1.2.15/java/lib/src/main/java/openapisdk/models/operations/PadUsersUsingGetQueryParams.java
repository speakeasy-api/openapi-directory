package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PadUsersUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public PadUsersUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}