package openapisdk.models.shared;


public enum ValidityPeriodTypeEnum {
    END_DATE("END_DATE"),
    ABSOLUTE("ABSOLUTE"),
    DAYS("DAYS"),
    MONTHS("MONTHS"),
    YEARS("YEARS");

    public final String value;

    private ValidityPeriodTypeEnum(String value) {
        this.value = value;
    }
}
