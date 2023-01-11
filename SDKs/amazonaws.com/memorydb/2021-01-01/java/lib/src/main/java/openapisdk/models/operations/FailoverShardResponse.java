package openapisdk.models.operations;



public class FailoverShardResponse {
    public Object apiCallRateForCustomerExceededFault;
    public FailoverShardResponse withApiCallRateForCustomerExceededFault(Object apiCallRateForCustomerExceededFault) {
        this.apiCallRateForCustomerExceededFault = apiCallRateForCustomerExceededFault;
        return this;
    }
    public Object clusterNotFoundFault;
    public FailoverShardResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public String contentType;
    public FailoverShardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FailoverShardResponse failoverShardResponse;
    public FailoverShardResponse withFailoverShardResponse(openapisdk.models.shared.FailoverShardResponse failoverShardResponse) {
        this.failoverShardResponse = failoverShardResponse;
        return this;
    }
    public Object invalidClusterStateFault;
    public FailoverShardResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    public Object invalidKMSKeyFault;
    public FailoverShardResponse withInvalidKmsKeyFault(Object invalidKMSKeyFault) {
        this.invalidKMSKeyFault = invalidKMSKeyFault;
        return this;
    }
    public Object invalidParameterCombinationException;
    public FailoverShardResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public FailoverShardResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object shardNotFoundFault;
    public FailoverShardResponse withShardNotFoundFault(Object shardNotFoundFault) {
        this.shardNotFoundFault = shardNotFoundFault;
        return this;
    }
    public Long statusCode;
    public FailoverShardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object testFailoverNotAvailableFault;
    public FailoverShardResponse withTestFailoverNotAvailableFault(Object testFailoverNotAvailableFault) {
        this.testFailoverNotAvailableFault = testFailoverNotAvailableFault;
        return this;
    }
}