package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomFieldPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=custom_field_gid")
    public String customFieldGid;
    public GetCustomFieldPathParams withCustomFieldGid(String customFieldGid) {
        this.customFieldGid = customFieldGid;
        return this;
    }
}