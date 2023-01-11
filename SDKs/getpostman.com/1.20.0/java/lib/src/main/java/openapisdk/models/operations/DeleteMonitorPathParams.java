package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMonitorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=monitor_uid")
    public String monitorUid;
    public DeleteMonitorPathParams withMonitorUid(String monitorUid) {
        this.monitorUid = monitorUid;
        return this;
    }
}