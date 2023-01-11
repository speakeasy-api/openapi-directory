package openapisdk.models.operations;



public class CreateMountTargetResponse {
    public Object availabilityZonesMismatch;
    public CreateMountTargetResponse withAvailabilityZonesMismatch(Object availabilityZonesMismatch) {
        this.availabilityZonesMismatch = availabilityZonesMismatch;
        return this;
    }
    public Object badRequest;
    public CreateMountTargetResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public CreateMountTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemNotFound;
    public CreateMountTargetResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object incorrectFileSystemLifeCycleState;
    public CreateMountTargetResponse withIncorrectFileSystemLifeCycleState(Object incorrectFileSystemLifeCycleState) {
        this.incorrectFileSystemLifeCycleState = incorrectFileSystemLifeCycleState;
        return this;
    }
    public Object internalServerError;
    public CreateMountTargetResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object ipAddressInUse;
    public CreateMountTargetResponse withIpAddressInUse(Object ipAddressInUse) {
        this.ipAddressInUse = ipAddressInUse;
        return this;
    }
    public Object mountTargetConflict;
    public CreateMountTargetResponse withMountTargetConflict(Object mountTargetConflict) {
        this.mountTargetConflict = mountTargetConflict;
        return this;
    }
    public openapisdk.models.shared.MountTargetDescription mountTargetDescription;
    public CreateMountTargetResponse withMountTargetDescription(openapisdk.models.shared.MountTargetDescription mountTargetDescription) {
        this.mountTargetDescription = mountTargetDescription;
        return this;
    }
    public Object networkInterfaceLimitExceeded;
    public CreateMountTargetResponse withNetworkInterfaceLimitExceeded(Object networkInterfaceLimitExceeded) {
        this.networkInterfaceLimitExceeded = networkInterfaceLimitExceeded;
        return this;
    }
    public Object noFreeAddressesInSubnet;
    public CreateMountTargetResponse withNoFreeAddressesInSubnet(Object noFreeAddressesInSubnet) {
        this.noFreeAddressesInSubnet = noFreeAddressesInSubnet;
        return this;
    }
    public Object securityGroupLimitExceeded;
    public CreateMountTargetResponse withSecurityGroupLimitExceeded(Object securityGroupLimitExceeded) {
        this.securityGroupLimitExceeded = securityGroupLimitExceeded;
        return this;
    }
    public Object securityGroupNotFound;
    public CreateMountTargetResponse withSecurityGroupNotFound(Object securityGroupNotFound) {
        this.securityGroupNotFound = securityGroupNotFound;
        return this;
    }
    public Long statusCode;
    public CreateMountTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subnetNotFound;
    public CreateMountTargetResponse withSubnetNotFound(Object subnetNotFound) {
        this.subnetNotFound = subnetNotFound;
        return this;
    }
    public Object unsupportedAvailabilityZone;
    public CreateMountTargetResponse withUnsupportedAvailabilityZone(Object unsupportedAvailabilityZone) {
        this.unsupportedAvailabilityZone = unsupportedAvailabilityZone;
        return this;
    }
}