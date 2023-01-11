package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetachNetworkInterfaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDetachNetworkInterfaceActionEnum action;
    public GetDetachNetworkInterfaceQueryParams withAction(GetDetachNetworkInterfaceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AttachmentId")
    public String attachmentId;
    public GetDetachNetworkInterfaceQueryParams withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDetachNetworkInterfaceQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Force")
    public Boolean force;
    public GetDetachNetworkInterfaceQueryParams withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDetachNetworkInterfaceVersionEnum version;
    public GetDetachNetworkInterfaceQueryParams withVersion(GetDetachNetworkInterfaceVersionEnum version) {
        this.version = version;
        return this;
    }
}