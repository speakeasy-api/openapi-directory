package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyClusterSnapshotScheduleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyClusterSnapshotScheduleActionEnum action;
    public GetModifyClusterSnapshotScheduleQueryParams withAction(GetModifyClusterSnapshotScheduleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetModifyClusterSnapshotScheduleQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DisassociateSchedule")
    public Boolean disassociateSchedule;
    public GetModifyClusterSnapshotScheduleQueryParams withDisassociateSchedule(Boolean disassociateSchedule) {
        this.disassociateSchedule = disassociateSchedule;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ScheduleIdentifier")
    public String scheduleIdentifier;
    public GetModifyClusterSnapshotScheduleQueryParams withScheduleIdentifier(String scheduleIdentifier) {
        this.scheduleIdentifier = scheduleIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyClusterSnapshotScheduleVersionEnum version;
    public GetModifyClusterSnapshotScheduleQueryParams withVersion(GetModifyClusterSnapshotScheduleVersionEnum version) {
        this.version = version;
        return this;
    }
}