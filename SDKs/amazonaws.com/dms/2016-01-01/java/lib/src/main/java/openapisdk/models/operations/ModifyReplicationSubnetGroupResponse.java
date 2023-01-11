package openapisdk.models.operations;



public class ModifyReplicationSubnetGroupResponse {
    public Object accessDeniedFault;
    public ModifyReplicationSubnetGroupResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public ModifyReplicationSubnetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidSubnet;
    public ModifyReplicationSubnetGroupResponse withInvalidSubnet(Object invalidSubnet) {
        this.invalidSubnet = invalidSubnet;
        return this;
    }
    public openapisdk.models.shared.ModifyReplicationSubnetGroupResponse modifyReplicationSubnetGroupResponse;
    public ModifyReplicationSubnetGroupResponse withModifyReplicationSubnetGroupResponse(openapisdk.models.shared.ModifyReplicationSubnetGroupResponse modifyReplicationSubnetGroupResponse) {
        this.modifyReplicationSubnetGroupResponse = modifyReplicationSubnetGroupResponse;
        return this;
    }
    public Object replicationSubnetGroupDoesNotCoverEnoughAZs;
    public ModifyReplicationSubnetGroupResponse withReplicationSubnetGroupDoesNotCoverEnoughAZs(Object replicationSubnetGroupDoesNotCoverEnoughAZs) {
        this.replicationSubnetGroupDoesNotCoverEnoughAZs = replicationSubnetGroupDoesNotCoverEnoughAZs;
        return this;
    }
    public Object resourceNotFoundFault;
    public ModifyReplicationSubnetGroupResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Object resourceQuotaExceededFault;
    public ModifyReplicationSubnetGroupResponse withResourceQuotaExceededFault(Object resourceQuotaExceededFault) {
        this.resourceQuotaExceededFault = resourceQuotaExceededFault;
        return this;
    }
    public Long statusCode;
    public ModifyReplicationSubnetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subnetAlreadyInUse;
    public ModifyReplicationSubnetGroupResponse withSubnetAlreadyInUse(Object subnetAlreadyInUse) {
        this.subnetAlreadyInUse = subnetAlreadyInUse;
        return this;
    }
}