package openapisdk.models.shared;


public enum ItemTypeEnum {
    ANALYSIS("ANALYSIS"),
    INCIDENT("INCIDENT"),
    METRIC("METRIC"),
    PARENT("PARENT"),
    ATTACHMENT("ATTACHMENT"),
    OTHER("OTHER");

    public final String value;

    private ItemTypeEnum(String value) {
        this.value = value;
    }
}
