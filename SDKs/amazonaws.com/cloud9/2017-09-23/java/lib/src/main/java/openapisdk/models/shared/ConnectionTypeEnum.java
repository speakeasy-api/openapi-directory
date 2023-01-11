package openapisdk.models.shared;


public enum ConnectionTypeEnum {
    CONNECT_SSH("CONNECT_SSH"),
    CONNECT_SSM("CONNECT_SSM");

    public final String value;

    private ConnectionTypeEnum(String value) {
        this.value = value;
    }
}
