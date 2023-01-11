package openapisdk.models.shared;


public enum MultiRegionKeyTypeEnum {
    PRIMARY("PRIMARY"),
    REPLICA("REPLICA");

    public final String value;

    private MultiRegionKeyTypeEnum(String value) {
        this.value = value;
    }
}
