package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResetInstanceAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetResetInstanceAttributeActionEnum action;
    public GetResetInstanceAttributeQueryParams withAction(GetResetInstanceAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GetResetInstanceAttributeAttributeEnum attribute;
    public GetResetInstanceAttributeQueryParams withAttribute(GetResetInstanceAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetResetInstanceAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetResetInstanceAttributeQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetResetInstanceAttributeVersionEnum version;
    public GetResetInstanceAttributeQueryParams withVersion(GetResetInstanceAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}