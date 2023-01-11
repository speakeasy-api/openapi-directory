package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeSnapshotsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeSnapshotsActionEnum action;
    public GetDescribeSnapshotsQueryParams withAction(GetDescribeSnapshotsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheClusterId")
    public String cacheClusterId;
    public GetDescribeSnapshotsQueryParams withCacheClusterId(String cacheClusterId) {
        this.cacheClusterId = cacheClusterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeSnapshotsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeSnapshotsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReplicationGroupId")
    public String replicationGroupId;
    public GetDescribeSnapshotsQueryParams withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ShowNodeGroupConfig")
    public Boolean showNodeGroupConfig;
    public GetDescribeSnapshotsQueryParams withShowNodeGroupConfig(Boolean showNodeGroupConfig) {
        this.showNodeGroupConfig = showNodeGroupConfig;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotName")
    public String snapshotName;
    public GetDescribeSnapshotsQueryParams withSnapshotName(String snapshotName) {
        this.snapshotName = snapshotName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotSource")
    public String snapshotSource;
    public GetDescribeSnapshotsQueryParams withSnapshotSource(String snapshotSource) {
        this.snapshotSource = snapshotSource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeSnapshotsVersionEnum version;
    public GetDescribeSnapshotsQueryParams withVersion(GetDescribeSnapshotsVersionEnum version) {
        this.version = version;
        return this;
    }
}