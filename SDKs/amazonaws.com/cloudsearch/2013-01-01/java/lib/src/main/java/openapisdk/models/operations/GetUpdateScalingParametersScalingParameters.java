package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetUpdateScalingParametersScalingParameters
 * The desired instance type and desired number of replicas of each index partition.
**/
public class GetUpdateScalingParametersScalingParameters {
    @SpeakeasyMetadata("queryParam:name=DesiredInstanceType")
    public openapisdk.models.shared.PartitionInstanceTypeEnum desiredInstanceType;
    public GetUpdateScalingParametersScalingParameters withDesiredInstanceType(openapisdk.models.shared.PartitionInstanceTypeEnum desiredInstanceType) {
        this.desiredInstanceType = desiredInstanceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=DesiredPartitionCount")
    public Long desiredPartitionCount;
    public GetUpdateScalingParametersScalingParameters withDesiredPartitionCount(Long desiredPartitionCount) {
        this.desiredPartitionCount = desiredPartitionCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=DesiredReplicationCount")
    public Long desiredReplicationCount;
    public GetUpdateScalingParametersScalingParameters withDesiredReplicationCount(Long desiredReplicationCount) {
        this.desiredReplicationCount = desiredReplicationCount;
        return this;
    }
}