package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnumOptionForCustomFieldPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=custom_field_gid")
    public String customFieldGid;
    public CreateEnumOptionForCustomFieldPathParams withCustomFieldGid(String customFieldGid) {
        this.customFieldGid = customFieldGid;
        return this;
    }
}