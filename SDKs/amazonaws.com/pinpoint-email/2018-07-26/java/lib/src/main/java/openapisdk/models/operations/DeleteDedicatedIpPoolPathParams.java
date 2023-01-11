package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDedicatedIpPoolPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PoolName")
    public String poolName;
    public DeleteDedicatedIpPoolPathParams withPoolName(String poolName) {
        this.poolName = poolName;
        return this;
    }
}