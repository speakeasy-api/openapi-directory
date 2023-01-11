package openapisdk.models.shared;


public enum ScalingTypeEnum {
    AUTO("Auto"),
    LINEAR("Linear"),
    LOGARITHMIC("Logarithmic"),
    REVERSE_LOGARITHMIC("ReverseLogarithmic");

    public final String value;

    private ScalingTypeEnum(String value) {
        this.value = value;
    }
}
