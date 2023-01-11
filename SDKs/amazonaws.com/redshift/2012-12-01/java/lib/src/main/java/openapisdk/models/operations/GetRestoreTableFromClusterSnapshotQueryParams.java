package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRestoreTableFromClusterSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRestoreTableFromClusterSnapshotActionEnum action;
    public GetRestoreTableFromClusterSnapshotQueryParams withAction(GetRestoreTableFromClusterSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetRestoreTableFromClusterSnapshotQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnableCaseSensitiveIdentifier")
    public Boolean enableCaseSensitiveIdentifier;
    public GetRestoreTableFromClusterSnapshotQueryParams withEnableCaseSensitiveIdentifier(Boolean enableCaseSensitiveIdentifier) {
        this.enableCaseSensitiveIdentifier = enableCaseSensitiveIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewTableName")
    public String newTableName;
    public GetRestoreTableFromClusterSnapshotQueryParams withNewTableName(String newTableName) {
        this.newTableName = newTableName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotIdentifier")
    public String snapshotIdentifier;
    public GetRestoreTableFromClusterSnapshotQueryParams withSnapshotIdentifier(String snapshotIdentifier) {
        this.snapshotIdentifier = snapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceDatabaseName")
    public String sourceDatabaseName;
    public GetRestoreTableFromClusterSnapshotQueryParams withSourceDatabaseName(String sourceDatabaseName) {
        this.sourceDatabaseName = sourceDatabaseName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceSchemaName")
    public String sourceSchemaName;
    public GetRestoreTableFromClusterSnapshotQueryParams withSourceSchemaName(String sourceSchemaName) {
        this.sourceSchemaName = sourceSchemaName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceTableName")
    public String sourceTableName;
    public GetRestoreTableFromClusterSnapshotQueryParams withSourceTableName(String sourceTableName) {
        this.sourceTableName = sourceTableName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetDatabaseName")
    public String targetDatabaseName;
    public GetRestoreTableFromClusterSnapshotQueryParams withTargetDatabaseName(String targetDatabaseName) {
        this.targetDatabaseName = targetDatabaseName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetSchemaName")
    public String targetSchemaName;
    public GetRestoreTableFromClusterSnapshotQueryParams withTargetSchemaName(String targetSchemaName) {
        this.targetSchemaName = targetSchemaName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRestoreTableFromClusterSnapshotVersionEnum version;
    public GetRestoreTableFromClusterSnapshotQueryParams withVersion(GetRestoreTableFromClusterSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}