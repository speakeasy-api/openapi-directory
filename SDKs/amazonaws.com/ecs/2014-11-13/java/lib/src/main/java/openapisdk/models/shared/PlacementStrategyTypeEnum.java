package openapisdk.models.shared;


public enum PlacementStrategyTypeEnum {
    RANDOM("random"),
    SPREAD("spread"),
    BINPACK("binpack");

    public final String value;

    private PlacementStrategyTypeEnum(String value) {
        this.value = value;
    }
}
