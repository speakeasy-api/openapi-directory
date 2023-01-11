package openapisdk.models.shared;


public enum PriorityTypeEnum {
    LATENCY("LATENCY"),
    COST("COST"),
    DESTINATION("DESTINATION"),
    LOCATION("LOCATION");

    public final String value;

    private PriorityTypeEnum(String value) {
        this.value = value;
    }
}
