package openapisdk.models.shared;


public enum RealtimeEndpointStatusEnum {
    NONE("NONE"),
    READY("READY"),
    UPDATING("UPDATING"),
    FAILED("FAILED");

    public final String value;

    private RealtimeEndpointStatusEnum(String value) {
        this.value = value;
    }
}
