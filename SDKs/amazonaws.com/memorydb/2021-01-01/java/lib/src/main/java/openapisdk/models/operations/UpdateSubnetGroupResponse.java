package openapisdk.models.operations;



public class UpdateSubnetGroupResponse {
    public String contentType;
    public UpdateSubnetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidSubnet;
    public UpdateSubnetGroupResponse withInvalidSubnet(Object invalidSubnet) {
        this.invalidSubnet = invalidSubnet;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public UpdateSubnetGroupResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public UpdateSubnetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subnetGroupNotFoundFault;
    public UpdateSubnetGroupResponse withSubnetGroupNotFoundFault(Object subnetGroupNotFoundFault) {
        this.subnetGroupNotFoundFault = subnetGroupNotFoundFault;
        return this;
    }
    public Object subnetInUse;
    public UpdateSubnetGroupResponse withSubnetInUse(Object subnetInUse) {
        this.subnetInUse = subnetInUse;
        return this;
    }
    public Object subnetNotAllowedFault;
    public UpdateSubnetGroupResponse withSubnetNotAllowedFault(Object subnetNotAllowedFault) {
        this.subnetNotAllowedFault = subnetNotAllowedFault;
        return this;
    }
    public Object subnetQuotaExceededFault;
    public UpdateSubnetGroupResponse withSubnetQuotaExceededFault(Object subnetQuotaExceededFault) {
        this.subnetQuotaExceededFault = subnetQuotaExceededFault;
        return this;
    }
    public openapisdk.models.shared.UpdateSubnetGroupResponse updateSubnetGroupResponse;
    public UpdateSubnetGroupResponse withUpdateSubnetGroupResponse(openapisdk.models.shared.UpdateSubnetGroupResponse updateSubnetGroupResponse) {
        this.updateSubnetGroupResponse = updateSubnetGroupResponse;
        return this;
    }
}