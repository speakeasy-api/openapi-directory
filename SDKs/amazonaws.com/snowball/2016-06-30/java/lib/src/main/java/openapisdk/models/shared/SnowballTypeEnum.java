package openapisdk.models.shared;


public enum SnowballTypeEnum {
    STANDARD("STANDARD"),
    EDGE("EDGE"),
    EDGE_C("EDGE_C"),
    EDGE_CG("EDGE_CG"),
    EDGE_S("EDGE_S"),
    SNC1_HDD("SNC1_HDD"),
    SNC1_SSD("SNC1_SSD");

    public final String value;

    private SnowballTypeEnum(String value) {
        this.value = value;
    }
}
