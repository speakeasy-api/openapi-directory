package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetQueueAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetQueueAttributesActionEnum action;
    public GetSetQueueAttributesQueryParams withAction(GetSetQueueAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public java.util.Map<String, String> attribute;
    public GetSetQueueAttributesQueryParams withAttribute(java.util.Map<String, String> attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetQueueAttributesVersionEnum version;
    public GetSetQueueAttributesQueryParams withVersion(GetSetQueueAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}