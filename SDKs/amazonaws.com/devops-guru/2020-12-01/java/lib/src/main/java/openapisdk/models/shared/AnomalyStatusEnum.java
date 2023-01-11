package openapisdk.models.shared;


public enum AnomalyStatusEnum {
    ONGOING("ONGOING"),
    CLOSED("CLOSED");

    public final String value;

    private AnomalyStatusEnum(String value) {
        this.value = value;
    }
}
