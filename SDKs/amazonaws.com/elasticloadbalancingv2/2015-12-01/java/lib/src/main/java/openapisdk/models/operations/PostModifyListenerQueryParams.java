package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyListenerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyListenerActionEnum action;
    public PostModifyListenerQueryParams withAction(PostModifyListenerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyListenerVersionEnum version;
    public PostModifyListenerQueryParams withVersion(PostModifyListenerVersionEnum version) {
        this.version = version;
        return this;
    }
}