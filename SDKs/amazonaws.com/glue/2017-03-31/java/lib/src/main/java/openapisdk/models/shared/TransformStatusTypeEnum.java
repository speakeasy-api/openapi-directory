package openapisdk.models.shared;


public enum TransformStatusTypeEnum {
    NOT_READY("NOT_READY"),
    READY("READY"),
    DELETING("DELETING");

    public final String value;

    private TransformStatusTypeEnum(String value) {
        this.value = value;
    }
}
