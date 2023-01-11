package openapisdk.models.shared;


public enum CsvHeaderOptionEnum {
    UNKNOWN("UNKNOWN"),
    PRESENT("PRESENT"),
    ABSENT("ABSENT");

    public final String value;

    private CsvHeaderOptionEnum(String value) {
        this.value = value;
    }
}
