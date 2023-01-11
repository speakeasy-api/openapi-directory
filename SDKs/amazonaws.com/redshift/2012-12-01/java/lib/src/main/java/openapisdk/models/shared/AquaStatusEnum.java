package openapisdk.models.shared;


public enum AquaStatusEnum {
    ENABLED("enabled"),
    DISABLED("disabled"),
    APPLYING("applying");

    public final String value;

    private AquaStatusEnum(String value) {
        this.value = value;
    }
}
