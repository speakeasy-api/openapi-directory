package openapisdk.models.operations;



public class CreateSubnetGroupResponse {
    public String contentType;
    public CreateSubnetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSubnetGroupResponse createSubnetGroupResponse;
    public CreateSubnetGroupResponse withCreateSubnetGroupResponse(openapisdk.models.shared.CreateSubnetGroupResponse createSubnetGroupResponse) {
        this.createSubnetGroupResponse = createSubnetGroupResponse;
        return this;
    }
    public Object invalidSubnet;
    public CreateSubnetGroupResponse withInvalidSubnet(Object invalidSubnet) {
        this.invalidSubnet = invalidSubnet;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public CreateSubnetGroupResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public CreateSubnetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subnetGroupAlreadyExistsFault;
    public CreateSubnetGroupResponse withSubnetGroupAlreadyExistsFault(Object subnetGroupAlreadyExistsFault) {
        this.subnetGroupAlreadyExistsFault = subnetGroupAlreadyExistsFault;
        return this;
    }
    public Object subnetGroupQuotaExceededFault;
    public CreateSubnetGroupResponse withSubnetGroupQuotaExceededFault(Object subnetGroupQuotaExceededFault) {
        this.subnetGroupQuotaExceededFault = subnetGroupQuotaExceededFault;
        return this;
    }
    public Object subnetNotAllowedFault;
    public CreateSubnetGroupResponse withSubnetNotAllowedFault(Object subnetNotAllowedFault) {
        this.subnetNotAllowedFault = subnetNotAllowedFault;
        return this;
    }
    public Object subnetQuotaExceededFault;
    public CreateSubnetGroupResponse withSubnetQuotaExceededFault(Object subnetQuotaExceededFault) {
        this.subnetQuotaExceededFault = subnetQuotaExceededFault;
        return this;
    }
    public Object tagQuotaPerResourceExceeded;
    public CreateSubnetGroupResponse withTagQuotaPerResourceExceeded(Object tagQuotaPerResourceExceeded) {
        this.tagQuotaPerResourceExceeded = tagQuotaPerResourceExceeded;
        return this;
    }
}