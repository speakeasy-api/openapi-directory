package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnumOptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enum_option_gid")
    public String enumOptionGid;
    public UpdateEnumOptionPathParams withEnumOptionGid(String enumOptionGid) {
        this.enumOptionGid = enumOptionGid;
        return this;
    }
}