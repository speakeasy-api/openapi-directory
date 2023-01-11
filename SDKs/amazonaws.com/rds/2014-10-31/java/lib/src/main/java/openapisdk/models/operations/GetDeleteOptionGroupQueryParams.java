package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteOptionGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteOptionGroupActionEnum action;
    public GetDeleteOptionGroupQueryParams withAction(GetDeleteOptionGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OptionGroupName")
    public String optionGroupName;
    public GetDeleteOptionGroupQueryParams withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteOptionGroupVersionEnum version;
    public GetDeleteOptionGroupQueryParams withVersion(GetDeleteOptionGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}