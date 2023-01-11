package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SingleMonitorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=monitor_uid")
    public String monitorUid;
    public SingleMonitorPathParams withMonitorUid(String monitorUid) {
        this.monitorUid = monitorUid;
        return this;
    }
}