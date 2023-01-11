package openapisdk.models.operations;



public class ListTagsResponse {
    public Object aclNotFoundFault;
    public ListTagsResponse withAclNotFoundFault(Object aclNotFoundFault) {
        this.aclNotFoundFault = aclNotFoundFault;
        return this;
    }
    public Object clusterNotFoundFault;
    public ListTagsResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public String contentType;
    public ListTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidARNFault;
    public ListTagsResponse withInvalidArnFault(Object invalidARNFault) {
        this.invalidARNFault = invalidARNFault;
        return this;
    }
    public Object invalidClusterStateFault;
    public ListTagsResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    public openapisdk.models.shared.ListTagsResponse listTagsResponse;
    public ListTagsResponse withListTagsResponse(openapisdk.models.shared.ListTagsResponse listTagsResponse) {
        this.listTagsResponse = listTagsResponse;
        return this;
    }
    public Object parameterGroupNotFoundFault;
    public ListTagsResponse withParameterGroupNotFoundFault(Object parameterGroupNotFoundFault) {
        this.parameterGroupNotFoundFault = parameterGroupNotFoundFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public ListTagsResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Object snapshotNotFoundFault;
    public ListTagsResponse withSnapshotNotFoundFault(Object snapshotNotFoundFault) {
        this.snapshotNotFoundFault = snapshotNotFoundFault;
        return this;
    }
    public Long statusCode;
    public ListTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subnetGroupNotFoundFault;
    public ListTagsResponse withSubnetGroupNotFoundFault(Object subnetGroupNotFoundFault) {
        this.subnetGroupNotFoundFault = subnetGroupNotFoundFault;
        return this;
    }
    public Object userNotFoundFault;
    public ListTagsResponse withUserNotFoundFault(Object userNotFoundFault) {
        this.userNotFoundFault = userNotFoundFault;
        return this;
    }
}