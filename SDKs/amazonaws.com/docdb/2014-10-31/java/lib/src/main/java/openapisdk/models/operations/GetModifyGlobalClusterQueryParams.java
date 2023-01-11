package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyGlobalClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyGlobalClusterActionEnum action;
    public GetModifyGlobalClusterQueryParams withAction(GetModifyGlobalClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeletionProtection")
    public Boolean deletionProtection;
    public GetModifyGlobalClusterQueryParams withDeletionProtection(Boolean deletionProtection) {
        this.deletionProtection = deletionProtection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalClusterIdentifier")
    public String globalClusterIdentifier;
    public GetModifyGlobalClusterQueryParams withGlobalClusterIdentifier(String globalClusterIdentifier) {
        this.globalClusterIdentifier = globalClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewGlobalClusterIdentifier")
    public String newGlobalClusterIdentifier;
    public GetModifyGlobalClusterQueryParams withNewGlobalClusterIdentifier(String newGlobalClusterIdentifier) {
        this.newGlobalClusterIdentifier = newGlobalClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyGlobalClusterVersionEnum version;
    public GetModifyGlobalClusterQueryParams withVersion(GetModifyGlobalClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}