package openapisdk.models.shared;


public enum EmployeeEmploymentRoleTypeEnum {
    CONTRACTOR("contractor"),
    EMPLOYEE("employee"),
    FREELANCE("freelance"),
    TEMP("temp"),
    INTERSHIP("intership"),
    OTHER("other");

    public final String value;

    private EmployeeEmploymentRoleTypeEnum(String value) {
        this.value = value;
    }
}
