package openapisdk.models.shared;


public enum HydrateParamEnum {
    INTEGRATOR("integrator"),
    LINE_ITEMS("lineItems"),
    TRACKING_NUMBERS_CARRIER("trackingNumbers.carrier");

    public final String value;

    private HydrateParamEnum(String value) {
        this.value = value;
    }
}
