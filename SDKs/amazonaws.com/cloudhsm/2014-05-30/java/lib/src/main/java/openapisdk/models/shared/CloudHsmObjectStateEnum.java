package openapisdk.models.shared;


public enum CloudHsmObjectStateEnum {
    READY("READY"),
    UPDATING("UPDATING"),
    DEGRADED("DEGRADED");

    public final String value;

    private CloudHsmObjectStateEnum(String value) {
        this.value = value;
    }
}
