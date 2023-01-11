package openapisdk.models.shared;


public enum DurationEnum {
    HR24("HR_24"),
    DAY7("DAY_7"),
    DAY14("DAY_14"),
    DAY30("DAY_30");

    public final String value;

    private DurationEnum(String value) {
        this.value = value;
    }
}
