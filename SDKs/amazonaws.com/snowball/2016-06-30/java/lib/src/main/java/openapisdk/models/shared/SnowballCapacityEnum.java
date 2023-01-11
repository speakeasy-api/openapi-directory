package openapisdk.models.shared;


public enum SnowballCapacityEnum {
    T50("T50"),
    T80("T80"),
    T100("T100"),
    T42("T42"),
    T98("T98"),
    T8("T8"),
    T14("T14"),
    NO_PREFERENCE("NoPreference");

    public final String value;

    private SnowballCapacityEnum(String value) {
        this.value = value;
    }
}
