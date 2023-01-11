package openapisdk.models.shared;


public enum TagFilterTypeEnum {
    KEY_ONLY("KEY_ONLY"),
    VALUE_ONLY("VALUE_ONLY"),
    KEY_AND_VALUE("KEY_AND_VALUE");

    public final String value;

    private TagFilterTypeEnum(String value) {
        this.value = value;
    }
}
