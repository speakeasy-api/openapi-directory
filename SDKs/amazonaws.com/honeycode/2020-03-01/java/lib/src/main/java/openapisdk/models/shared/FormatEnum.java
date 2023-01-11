package openapisdk.models.shared;


public enum FormatEnum {
    AUTO("AUTO"),
    NUMBER("NUMBER"),
    CURRENCY("CURRENCY"),
    DATE("DATE"),
    TIME("TIME"),
    DATE_TIME("DATE_TIME"),
    PERCENTAGE("PERCENTAGE"),
    TEXT("TEXT"),
    ACCOUNTING("ACCOUNTING"),
    CONTACT("CONTACT"),
    ROWLINK("ROWLINK");

    public final String value;

    private FormatEnum(String value) {
        this.value = value;
    }
}
