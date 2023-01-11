package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateAlias20200531PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TargetDistributionId")
    public String targetDistributionId;
    public AssociateAlias20200531PathParams withTargetDistributionId(String targetDistributionId) {
        this.targetDistributionId = targetDistributionId;
        return this;
    }
}