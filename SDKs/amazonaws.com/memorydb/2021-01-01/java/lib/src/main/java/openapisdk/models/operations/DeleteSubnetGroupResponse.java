package openapisdk.models.operations;



public class DeleteSubnetGroupResponse {
    public String contentType;
    public DeleteSubnetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteSubnetGroupResponse deleteSubnetGroupResponse;
    public DeleteSubnetGroupResponse withDeleteSubnetGroupResponse(openapisdk.models.shared.DeleteSubnetGroupResponse deleteSubnetGroupResponse) {
        this.deleteSubnetGroupResponse = deleteSubnetGroupResponse;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DeleteSubnetGroupResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DeleteSubnetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subnetGroupInUseFault;
    public DeleteSubnetGroupResponse withSubnetGroupInUseFault(Object subnetGroupInUseFault) {
        this.subnetGroupInUseFault = subnetGroupInUseFault;
        return this;
    }
    public Object subnetGroupNotFoundFault;
    public DeleteSubnetGroupResponse withSubnetGroupNotFoundFault(Object subnetGroupNotFoundFault) {
        this.subnetGroupNotFoundFault = subnetGroupNotFoundFault;
        return this;
    }
}