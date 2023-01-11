package openapisdk.models.shared;


public enum AvailabilityRequestClosestEnum {
    EITHER("either"),
    AFTER("after"),
    BEFORE("before");

    public final String value;

    private AvailabilityRequestClosestEnum(String value) {
        this.value = value;
    }
}
