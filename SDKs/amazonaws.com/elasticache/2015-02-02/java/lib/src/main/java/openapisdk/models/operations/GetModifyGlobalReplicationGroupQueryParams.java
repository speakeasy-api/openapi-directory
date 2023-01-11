package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyGlobalReplicationGroupActionEnum action;
    public GetModifyGlobalReplicationGroupQueryParams withAction(GetModifyGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplyImmediately")
    public Boolean applyImmediately;
    public GetModifyGlobalReplicationGroupQueryParams withApplyImmediately(Boolean applyImmediately) {
        this.applyImmediately = applyImmediately;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutomaticFailoverEnabled")
    public Boolean automaticFailoverEnabled;
    public GetModifyGlobalReplicationGroupQueryParams withAutomaticFailoverEnabled(Boolean automaticFailoverEnabled) {
        this.automaticFailoverEnabled = automaticFailoverEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheNodeType")
    public String cacheNodeType;
    public GetModifyGlobalReplicationGroupQueryParams withCacheNodeType(String cacheNodeType) {
        this.cacheNodeType = cacheNodeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheParameterGroupName")
    public String cacheParameterGroupName;
    public GetModifyGlobalReplicationGroupQueryParams withCacheParameterGroupName(String cacheParameterGroupName) {
        this.cacheParameterGroupName = cacheParameterGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EngineVersion")
    public String engineVersion;
    public GetModifyGlobalReplicationGroupQueryParams withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalReplicationGroupDescription")
    public String globalReplicationGroupDescription;
    public GetModifyGlobalReplicationGroupQueryParams withGlobalReplicationGroupDescription(String globalReplicationGroupDescription) {
        this.globalReplicationGroupDescription = globalReplicationGroupDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalReplicationGroupId")
    public String globalReplicationGroupId;
    public GetModifyGlobalReplicationGroupQueryParams withGlobalReplicationGroupId(String globalReplicationGroupId) {
        this.globalReplicationGroupId = globalReplicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyGlobalReplicationGroupVersionEnum version;
    public GetModifyGlobalReplicationGroupQueryParams withVersion(GetModifyGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}