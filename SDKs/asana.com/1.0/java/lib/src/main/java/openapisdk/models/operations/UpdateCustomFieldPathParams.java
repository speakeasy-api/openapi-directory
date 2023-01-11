package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomFieldPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=custom_field_gid")
    public String customFieldGid;
    public UpdateCustomFieldPathParams withCustomFieldGid(String customFieldGid) {
        this.customFieldGid = customFieldGid;
        return this;
    }
}