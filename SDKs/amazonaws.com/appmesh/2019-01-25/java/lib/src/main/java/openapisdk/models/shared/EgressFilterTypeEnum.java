package openapisdk.models.shared;


public enum EgressFilterTypeEnum {
    ALLOW_ALL("ALLOW_ALL"),
    DROP_ALL("DROP_ALL");

    public final String value;

    private EgressFilterTypeEnum(String value) {
        this.value = value;
    }
}
