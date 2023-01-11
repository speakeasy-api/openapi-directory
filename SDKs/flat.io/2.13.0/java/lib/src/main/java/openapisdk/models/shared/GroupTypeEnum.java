package openapisdk.models.shared;


public enum GroupTypeEnum {
    GENERIC("generic"),
    CLASS_TEACHERS("classTeachers"),
    CLASS_STUDENTS("classStudents");

    public final String value;

    private GroupTypeEnum(String value) {
        this.value = value;
    }
}
