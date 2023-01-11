package openapisdk.models.shared;


public enum EbsVolumeTypeEnum {
    STANDARD("standard"),
    IO1("io1"),
    IO2("io2"),
    GP2("gp2"),
    GP3("gp3"),
    SC1("sc1"),
    ST1("st1");

    public final String value;

    private EbsVolumeTypeEnum(String value) {
        this.value = value;
    }
}
