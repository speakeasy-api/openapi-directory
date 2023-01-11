package openapisdk.models.shared;


public enum StandardsStatusEnum {
    PENDING("PENDING"),
    READY("READY"),
    FAILED("FAILED"),
    DELETING("DELETING"),
    INCOMPLETE("INCOMPLETE");

    public final String value;

    private StandardsStatusEnum(String value) {
        this.value = value;
    }
}
