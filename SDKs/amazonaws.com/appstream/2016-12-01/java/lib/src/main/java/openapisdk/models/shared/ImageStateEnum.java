package openapisdk.models.shared;


public enum ImageStateEnum {
    PENDING("PENDING"),
    AVAILABLE("AVAILABLE"),
    FAILED("FAILED"),
    COPYING("COPYING"),
    DELETING("DELETING"),
    CREATING("CREATING"),
    IMPORTING("IMPORTING");

    public final String value;

    private ImageStateEnum(String value) {
        this.value = value;
    }
}
