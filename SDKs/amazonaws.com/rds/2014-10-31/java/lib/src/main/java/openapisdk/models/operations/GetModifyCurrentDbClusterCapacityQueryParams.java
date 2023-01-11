package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyCurrentDbClusterCapacityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyCurrentDbClusterCapacityActionEnum action;
    public GetModifyCurrentDbClusterCapacityQueryParams withAction(GetModifyCurrentDbClusterCapacityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Capacity")
    public Long capacity;
    public GetModifyCurrentDbClusterCapacityQueryParams withCapacity(Long capacity) {
        this.capacity = capacity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterIdentifier")
    public String dbClusterIdentifier;
    public GetModifyCurrentDbClusterCapacityQueryParams withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SecondsBeforeTimeout")
    public Long secondsBeforeTimeout;
    public GetModifyCurrentDbClusterCapacityQueryParams withSecondsBeforeTimeout(Long secondsBeforeTimeout) {
        this.secondsBeforeTimeout = secondsBeforeTimeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TimeoutAction")
    public String timeoutAction;
    public GetModifyCurrentDbClusterCapacityQueryParams withTimeoutAction(String timeoutAction) {
        this.timeoutAction = timeoutAction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyCurrentDbClusterCapacityVersionEnum version;
    public GetModifyCurrentDbClusterCapacityQueryParams withVersion(GetModifyCurrentDbClusterCapacityVersionEnum version) {
        this.version = version;
        return this;
    }
}