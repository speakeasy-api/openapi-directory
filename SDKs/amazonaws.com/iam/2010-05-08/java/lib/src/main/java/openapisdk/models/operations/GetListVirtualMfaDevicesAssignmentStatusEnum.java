package openapisdk.models.operations;


public enum GetListVirtualMfaDevicesAssignmentStatusEnum {
    ASSIGNED("Assigned"),
    UNASSIGNED("Unassigned"),
    ANY("Any");

    public final String value;

    private GetListVirtualMfaDevicesAssignmentStatusEnum(String value) {
        this.value = value;
    }
}
