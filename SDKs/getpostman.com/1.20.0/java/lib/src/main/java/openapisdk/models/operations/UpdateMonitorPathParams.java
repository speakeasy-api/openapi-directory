package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMonitorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=monitor_uid")
    public String monitorUid;
    public UpdateMonitorPathParams withMonitorUid(String monitorUid) {
        this.monitorUid = monitorUid;
        return this;
    }
}