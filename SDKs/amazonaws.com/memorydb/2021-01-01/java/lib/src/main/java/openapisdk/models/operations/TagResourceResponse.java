package openapisdk.models.operations;



public class TagResourceResponse {
    public Object aclNotFoundFault;
    public TagResourceResponse withAclNotFoundFault(Object aclNotFoundFault) {
        this.aclNotFoundFault = aclNotFoundFault;
        return this;
    }
    public Object clusterNotFoundFault;
    public TagResourceResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public String contentType;
    public TagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidARNFault;
    public TagResourceResponse withInvalidArnFault(Object invalidARNFault) {
        this.invalidARNFault = invalidARNFault;
        return this;
    }
    public Object invalidClusterStateFault;
    public TagResourceResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    public Object parameterGroupNotFoundFault;
    public TagResourceResponse withParameterGroupNotFoundFault(Object parameterGroupNotFoundFault) {
        this.parameterGroupNotFoundFault = parameterGroupNotFoundFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public TagResourceResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Object snapshotNotFoundFault;
    public TagResourceResponse withSnapshotNotFoundFault(Object snapshotNotFoundFault) {
        this.snapshotNotFoundFault = snapshotNotFoundFault;
        return this;
    }
    public Long statusCode;
    public TagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subnetGroupNotFoundFault;
    public TagResourceResponse withSubnetGroupNotFoundFault(Object subnetGroupNotFoundFault) {
        this.subnetGroupNotFoundFault = subnetGroupNotFoundFault;
        return this;
    }
    public Object tagQuotaPerResourceExceeded;
    public TagResourceResponse withTagQuotaPerResourceExceeded(Object tagQuotaPerResourceExceeded) {
        this.tagQuotaPerResourceExceeded = tagQuotaPerResourceExceeded;
        return this;
    }
    public openapisdk.models.shared.TagResourceResponse tagResourceResponse;
    public TagResourceResponse withTagResourceResponse(openapisdk.models.shared.TagResourceResponse tagResourceResponse) {
        this.tagResourceResponse = tagResourceResponse;
        return this;
    }
    public Object userNotFoundFault;
    public TagResourceResponse withUserNotFoundFault(Object userNotFoundFault) {
        this.userNotFoundFault = userNotFoundFault;
        return this;
    }
}