package openapisdk.models.operations;



public class CreateReplicationSubnetGroupResponse {
    public Object accessDeniedFault;
    public CreateReplicationSubnetGroupResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public CreateReplicationSubnetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateReplicationSubnetGroupResponse createReplicationSubnetGroupResponse;
    public CreateReplicationSubnetGroupResponse withCreateReplicationSubnetGroupResponse(openapisdk.models.shared.CreateReplicationSubnetGroupResponse createReplicationSubnetGroupResponse) {
        this.createReplicationSubnetGroupResponse = createReplicationSubnetGroupResponse;
        return this;
    }
    public Object invalidSubnet;
    public CreateReplicationSubnetGroupResponse withInvalidSubnet(Object invalidSubnet) {
        this.invalidSubnet = invalidSubnet;
        return this;
    }
    public Object replicationSubnetGroupDoesNotCoverEnoughAZs;
    public CreateReplicationSubnetGroupResponse withReplicationSubnetGroupDoesNotCoverEnoughAZs(Object replicationSubnetGroupDoesNotCoverEnoughAZs) {
        this.replicationSubnetGroupDoesNotCoverEnoughAZs = replicationSubnetGroupDoesNotCoverEnoughAZs;
        return this;
    }
    public Object resourceAlreadyExistsFault;
    public CreateReplicationSubnetGroupResponse withResourceAlreadyExistsFault(Object resourceAlreadyExistsFault) {
        this.resourceAlreadyExistsFault = resourceAlreadyExistsFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public CreateReplicationSubnetGroupResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Object resourceQuotaExceededFault;
    public CreateReplicationSubnetGroupResponse withResourceQuotaExceededFault(Object resourceQuotaExceededFault) {
        this.resourceQuotaExceededFault = resourceQuotaExceededFault;
        return this;
    }
    public Long statusCode;
    public CreateReplicationSubnetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}