package openapisdk.models.shared;


public enum EntityTypeEnum {
    PERSON("PERSON"),
    LOCATION("LOCATION"),
    ORGANIZATION("ORGANIZATION"),
    COMMERCIAL_ITEM("COMMERCIAL_ITEM"),
    EVENT("EVENT"),
    DATE("DATE"),
    QUANTITY("QUANTITY"),
    TITLE("TITLE"),
    OTHER("OTHER");

    public final String value;

    private EntityTypeEnum(String value) {
        this.value = value;
    }
}
