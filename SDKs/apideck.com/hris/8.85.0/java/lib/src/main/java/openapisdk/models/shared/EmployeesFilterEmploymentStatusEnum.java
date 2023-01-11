package openapisdk.models.shared;


public enum EmployeesFilterEmploymentStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    TERMINATED("terminated"),
    OTHER("other");

    public final String value;

    private EmployeesFilterEmploymentStatusEnum(String value) {
        this.value = value;
    }
}
