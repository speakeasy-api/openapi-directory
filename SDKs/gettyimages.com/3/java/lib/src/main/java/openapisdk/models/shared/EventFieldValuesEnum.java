package openapisdk.models.shared;


public enum EventFieldValuesEnum {
    ID("id"),
    CHILD_EVENT_COUNT("child_event_count"),
    EDITORIAL_SEGMENTS("editorial_segments"),
    HERO_IMAGE("hero_image"),
    IMAGE_COUNT("image_count"),
    KEYWORDS("keywords"),
    LOCATION("location"),
    NAME("name"),
    START_DATE("start_date"),
    TYPE("type");

    public final String value;

    private EventFieldValuesEnum(String value) {
        this.value = value;
    }
}
