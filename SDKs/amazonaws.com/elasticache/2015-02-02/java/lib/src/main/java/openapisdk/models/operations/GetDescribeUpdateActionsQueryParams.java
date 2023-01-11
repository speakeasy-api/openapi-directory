package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeUpdateActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeUpdateActionsActionEnum action;
    public GetDescribeUpdateActionsQueryParams withAction(GetDescribeUpdateActionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheClusterIds")
    public String[] cacheClusterIds;
    public GetDescribeUpdateActionsQueryParams withCacheClusterIds(String[] cacheClusterIds) {
        this.cacheClusterIds = cacheClusterIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Engine")
    public String engine;
    public GetDescribeUpdateActionsQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeUpdateActionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeUpdateActionsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReplicationGroupIds")
    public String[] replicationGroupIds;
    public GetDescribeUpdateActionsQueryParams withReplicationGroupIds(String[] replicationGroupIds) {
        this.replicationGroupIds = replicationGroupIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceUpdateName")
    public String serviceUpdateName;
    public GetDescribeUpdateActionsQueryParams withServiceUpdateName(String serviceUpdateName) {
        this.serviceUpdateName = serviceUpdateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceUpdateStatus")
    public openapisdk.models.shared.ServiceUpdateStatusEnum[] serviceUpdateStatus;
    public GetDescribeUpdateActionsQueryParams withServiceUpdateStatus(openapisdk.models.shared.ServiceUpdateStatusEnum[] serviceUpdateStatus) {
        this.serviceUpdateStatus = serviceUpdateStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceUpdateTimeRange")
    public GetDescribeUpdateActionsServiceUpdateTimeRange serviceUpdateTimeRange;
    public GetDescribeUpdateActionsQueryParams withServiceUpdateTimeRange(GetDescribeUpdateActionsServiceUpdateTimeRange serviceUpdateTimeRange) {
        this.serviceUpdateTimeRange = serviceUpdateTimeRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ShowNodeLevelUpdateStatus")
    public Boolean showNodeLevelUpdateStatus;
    public GetDescribeUpdateActionsQueryParams withShowNodeLevelUpdateStatus(Boolean showNodeLevelUpdateStatus) {
        this.showNodeLevelUpdateStatus = showNodeLevelUpdateStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UpdateActionStatus")
    public openapisdk.models.shared.UpdateActionStatusEnum[] updateActionStatus;
    public GetDescribeUpdateActionsQueryParams withUpdateActionStatus(openapisdk.models.shared.UpdateActionStatusEnum[] updateActionStatus) {
        this.updateActionStatus = updateActionStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeUpdateActionsVersionEnum version;
    public GetDescribeUpdateActionsQueryParams withVersion(GetDescribeUpdateActionsVersionEnum version) {
        this.version = version;
        return this;
    }
}