package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateGlobalClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateGlobalClusterActionEnum action;
    public GetCreateGlobalClusterQueryParams withAction(GetCreateGlobalClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DatabaseName")
    public String databaseName;
    public GetCreateGlobalClusterQueryParams withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeletionProtection")
    public Boolean deletionProtection;
    public GetCreateGlobalClusterQueryParams withDeletionProtection(Boolean deletionProtection) {
        this.deletionProtection = deletionProtection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Engine")
    public String engine;
    public GetCreateGlobalClusterQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EngineVersion")
    public String engineVersion;
    public GetCreateGlobalClusterQueryParams withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalClusterIdentifier")
    public String globalClusterIdentifier;
    public GetCreateGlobalClusterQueryParams withGlobalClusterIdentifier(String globalClusterIdentifier) {
        this.globalClusterIdentifier = globalClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceDBClusterIdentifier")
    public String sourceDBClusterIdentifier;
    public GetCreateGlobalClusterQueryParams withSourceDbClusterIdentifier(String sourceDBClusterIdentifier) {
        this.sourceDBClusterIdentifier = sourceDBClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StorageEncrypted")
    public Boolean storageEncrypted;
    public GetCreateGlobalClusterQueryParams withStorageEncrypted(Boolean storageEncrypted) {
        this.storageEncrypted = storageEncrypted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateGlobalClusterVersionEnum version;
    public GetCreateGlobalClusterQueryParams withVersion(GetCreateGlobalClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}