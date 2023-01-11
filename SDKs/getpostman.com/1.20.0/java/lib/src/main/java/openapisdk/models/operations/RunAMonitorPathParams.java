package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunAMonitorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=monitor_uid")
    public String monitorUid;
    public RunAMonitorPathParams withMonitorUid(String monitorUid) {
        this.monitorUid = monitorUid;
        return this;
    }
}