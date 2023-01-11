package openapisdk.models.shared;


public enum BgpPeerStateEnum {
    VERIFYING("verifying"),
    PENDING("pending"),
    AVAILABLE("available"),
    DELETING("deleting"),
    DELETED("deleted");

    public final String value;

    private BgpPeerStateEnum(String value) {
        this.value = value;
    }
}
