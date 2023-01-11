package openapisdk.models.shared;


public enum JobEmploymentTermsEnum {
    FULL_TIME("full-time"),
    PART_TIME("part-time"),
    INTERSHIP("intership"),
    CONTRACTOR("contractor"),
    EMPLOYEE("employee"),
    FREELANCE("freelance"),
    TEMP("temp"),
    SEASONAL("seasonal"),
    VOLUNTEER("volunteer"),
    OTHER("other");

    public final String value;

    private JobEmploymentTermsEnum(String value) {
        this.value = value;
    }
}
