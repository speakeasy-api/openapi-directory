package openapisdk.models.shared;



/**
 * GetLaunchTemplateDataResultLaunchTemplateDataPlacement
 * The placement of the instance.
**/
public class GetLaunchTemplateDataResultLaunchTemplateDataPlacement {
    public java.util.Map<String, Object> affinity;
    public GetLaunchTemplateDataResultLaunchTemplateDataPlacement withAffinity(java.util.Map<String, Object> affinity) {
        this.affinity = affinity;
        return this;
    }
    public java.util.Map<String, Object> availabilityZone;
    public GetLaunchTemplateDataResultLaunchTemplateDataPlacement withAvailabilityZone(java.util.Map<String, Object> availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public java.util.Map<String, Object> groupName;
    public GetLaunchTemplateDataResultLaunchTemplateDataPlacement withGroupName(java.util.Map<String, Object> groupName) {
        this.groupName = groupName;
        return this;
    }
    public java.util.Map<String, Object> hostId;
    public GetLaunchTemplateDataResultLaunchTemplateDataPlacement withHostId(java.util.Map<String, Object> hostId) {
        this.hostId = hostId;
        return this;
    }
    public java.util.Map<String, Object> hostResourceGroupArn;
    public GetLaunchTemplateDataResultLaunchTemplateDataPlacement withHostResourceGroupArn(java.util.Map<String, Object> hostResourceGroupArn) {
        this.hostResourceGroupArn = hostResourceGroupArn;
        return this;
    }
    public java.util.Map<String, Object> partitionNumber;
    public GetLaunchTemplateDataResultLaunchTemplateDataPlacement withPartitionNumber(java.util.Map<String, Object> partitionNumber) {
        this.partitionNumber = partitionNumber;
        return this;
    }
    public java.util.Map<String, Object> spreadDomain;
    public GetLaunchTemplateDataResultLaunchTemplateDataPlacement withSpreadDomain(java.util.Map<String, Object> spreadDomain) {
        this.spreadDomain = spreadDomain;
        return this;
    }
    public java.util.Map<String, Object> tenancy;
    public GetLaunchTemplateDataResultLaunchTemplateDataPlacement withTenancy(java.util.Map<String, Object> tenancy) {
        this.tenancy = tenancy;
        return this;
    }
}