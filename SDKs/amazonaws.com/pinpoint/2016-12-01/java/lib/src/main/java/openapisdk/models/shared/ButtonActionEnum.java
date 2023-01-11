package openapisdk.models.shared;


public enum ButtonActionEnum {
    LINK("LINK"),
    DEEP_LINK("DEEP_LINK"),
    CLOSE("CLOSE");

    public final String value;

    private ButtonActionEnum(String value) {
        this.value = value;
    }
}
