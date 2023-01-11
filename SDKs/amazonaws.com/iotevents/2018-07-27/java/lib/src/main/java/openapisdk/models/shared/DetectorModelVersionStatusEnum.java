package openapisdk.models.shared;


public enum DetectorModelVersionStatusEnum {
    ACTIVE("ACTIVE"),
    ACTIVATING("ACTIVATING"),
    INACTIVE("INACTIVE"),
    DEPRECATED("DEPRECATED"),
    DRAFT("DRAFT"),
    PAUSED("PAUSED"),
    FAILED("FAILED");

    public final String value;

    private DetectorModelVersionStatusEnum(String value) {
        this.value = value;
    }
}
