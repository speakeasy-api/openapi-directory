package openapisdk.models.shared;


public enum EmployeeEmploymentStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    TERMINATED("terminated"),
    OTHER("other");

    public final String value;

    private EmployeeEmploymentStatusEnum(String value) {
        this.value = value;
    }
}
