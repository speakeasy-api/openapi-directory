package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDistributionsByKeyGroup20200531PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=KeyGroupId")
    public String keyGroupId;
    public ListDistributionsByKeyGroup20200531PathParams withKeyGroupId(String keyGroupId) {
        this.keyGroupId = keyGroupId;
        return this;
    }
}