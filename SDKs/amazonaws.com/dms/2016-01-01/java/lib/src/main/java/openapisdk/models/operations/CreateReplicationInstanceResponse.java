package openapisdk.models.operations;



public class CreateReplicationInstanceResponse {
    public Object accessDeniedFault;
    public CreateReplicationInstanceResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public CreateReplicationInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateReplicationInstanceResponse createReplicationInstanceResponse;
    public CreateReplicationInstanceResponse withCreateReplicationInstanceResponse(openapisdk.models.shared.CreateReplicationInstanceResponse createReplicationInstanceResponse) {
        this.createReplicationInstanceResponse = createReplicationInstanceResponse;
        return this;
    }
    public Object insufficientResourceCapacityFault;
    public CreateReplicationInstanceResponse withInsufficientResourceCapacityFault(Object insufficientResourceCapacityFault) {
        this.insufficientResourceCapacityFault = insufficientResourceCapacityFault;
        return this;
    }
    public Object invalidResourceStateFault;
    public CreateReplicationInstanceResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object invalidSubnet;
    public CreateReplicationInstanceResponse withInvalidSubnet(Object invalidSubnet) {
        this.invalidSubnet = invalidSubnet;
        return this;
    }
    public Object kmsKeyNotAccessibleFault;
    public CreateReplicationInstanceResponse withKmsKeyNotAccessibleFault(Object kmsKeyNotAccessibleFault) {
        this.kmsKeyNotAccessibleFault = kmsKeyNotAccessibleFault;
        return this;
    }
    public Object replicationSubnetGroupDoesNotCoverEnoughAZs;
    public CreateReplicationInstanceResponse withReplicationSubnetGroupDoesNotCoverEnoughAZs(Object replicationSubnetGroupDoesNotCoverEnoughAZs) {
        this.replicationSubnetGroupDoesNotCoverEnoughAZs = replicationSubnetGroupDoesNotCoverEnoughAZs;
        return this;
    }
    public Object resourceAlreadyExistsFault;
    public CreateReplicationInstanceResponse withResourceAlreadyExistsFault(Object resourceAlreadyExistsFault) {
        this.resourceAlreadyExistsFault = resourceAlreadyExistsFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public CreateReplicationInstanceResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Object resourceQuotaExceededFault;
    public CreateReplicationInstanceResponse withResourceQuotaExceededFault(Object resourceQuotaExceededFault) {
        this.resourceQuotaExceededFault = resourceQuotaExceededFault;
        return this;
    }
    public Long statusCode;
    public CreateReplicationInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object storageQuotaExceededFault;
    public CreateReplicationInstanceResponse withStorageQuotaExceededFault(Object storageQuotaExceededFault) {
        this.storageQuotaExceededFault = storageQuotaExceededFault;
        return this;
    }
}