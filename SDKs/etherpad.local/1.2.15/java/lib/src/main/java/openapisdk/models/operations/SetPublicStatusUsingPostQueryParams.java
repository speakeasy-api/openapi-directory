package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetPublicStatusUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public SetPublicStatusUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=publicStatus")
    public String publicStatus;
    public SetPublicStatusUsingPostQueryParams withPublicStatus(String publicStatus) {
        this.publicStatus = publicStatus;
        return this;
    }
}