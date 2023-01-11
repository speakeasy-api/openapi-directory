package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchOrganizationPathParams withId(String id) {
        this.id = id;
        return this;
    }
}