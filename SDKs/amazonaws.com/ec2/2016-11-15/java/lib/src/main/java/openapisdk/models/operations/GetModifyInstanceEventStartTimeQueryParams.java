package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyInstanceEventStartTimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyInstanceEventStartTimeActionEnum action;
    public GetModifyInstanceEventStartTimeQueryParams withAction(GetModifyInstanceEventStartTimeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyInstanceEventStartTimeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceEventId")
    public String instanceEventId;
    public GetModifyInstanceEventStartTimeQueryParams withInstanceEventId(String instanceEventId) {
        this.instanceEventId = instanceEventId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetModifyInstanceEventStartTimeQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NotBefore")
    public OffsetDateTime notBefore;
    public GetModifyInstanceEventStartTimeQueryParams withNotBefore(OffsetDateTime notBefore) {
        this.notBefore = notBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyInstanceEventStartTimeVersionEnum version;
    public GetModifyInstanceEventStartTimeQueryParams withVersion(GetModifyInstanceEventStartTimeVersionEnum version) {
        this.version = version;
        return this;
    }
}