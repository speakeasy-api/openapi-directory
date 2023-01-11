package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyClusterMaintenanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyClusterMaintenanceActionEnum action;
    public GetModifyClusterMaintenanceQueryParams withAction(GetModifyClusterMaintenanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetModifyClusterMaintenanceQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeferMaintenance")
    public Boolean deferMaintenance;
    public GetModifyClusterMaintenanceQueryParams withDeferMaintenance(Boolean deferMaintenance) {
        this.deferMaintenance = deferMaintenance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeferMaintenanceDuration")
    public Long deferMaintenanceDuration;
    public GetModifyClusterMaintenanceQueryParams withDeferMaintenanceDuration(Long deferMaintenanceDuration) {
        this.deferMaintenanceDuration = deferMaintenanceDuration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeferMaintenanceEndTime")
    public OffsetDateTime deferMaintenanceEndTime;
    public GetModifyClusterMaintenanceQueryParams withDeferMaintenanceEndTime(OffsetDateTime deferMaintenanceEndTime) {
        this.deferMaintenanceEndTime = deferMaintenanceEndTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeferMaintenanceIdentifier")
    public String deferMaintenanceIdentifier;
    public GetModifyClusterMaintenanceQueryParams withDeferMaintenanceIdentifier(String deferMaintenanceIdentifier) {
        this.deferMaintenanceIdentifier = deferMaintenanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeferMaintenanceStartTime")
    public OffsetDateTime deferMaintenanceStartTime;
    public GetModifyClusterMaintenanceQueryParams withDeferMaintenanceStartTime(OffsetDateTime deferMaintenanceStartTime) {
        this.deferMaintenanceStartTime = deferMaintenanceStartTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyClusterMaintenanceVersionEnum version;
    public GetModifyClusterMaintenanceQueryParams withVersion(GetModifyClusterMaintenanceVersionEnum version) {
        this.version = version;
        return this;
    }
}