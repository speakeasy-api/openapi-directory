package openapisdk.models.shared;


public enum BuildStatusEnum {
    INITIALIZED("INITIALIZED"),
    READY("READY"),
    FAILED("FAILED");

    public final String value;

    private BuildStatusEnum(String value) {
        this.value = value;
    }
}
