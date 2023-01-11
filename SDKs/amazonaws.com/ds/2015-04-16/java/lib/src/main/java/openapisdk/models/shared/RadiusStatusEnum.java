package openapisdk.models.shared;


public enum RadiusStatusEnum {
    CREATING("Creating"),
    COMPLETED("Completed"),
    FAILED("Failed");

    public final String value;

    private RadiusStatusEnum(String value) {
        this.value = value;
    }
}
