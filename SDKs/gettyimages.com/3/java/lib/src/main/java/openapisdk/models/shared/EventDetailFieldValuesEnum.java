package openapisdk.models.shared;


public enum EventDetailFieldValuesEnum {
    ID("id"),
    CHILD_EVENT_COUNT("child_event_count"),
    EDITORIAL_SEGMENTS("editorial_segments"),
    HERO_IMAGE("hero_image"),
    IMAGE_COUNT("image_count"),
    LOCATION("location"),
    NAME("name"),
    START_DATE("start_date"),
    TYPE("type");

    public final String value;

    private EventDetailFieldValuesEnum(String value) {
        this.value = value;
    }
}
