package openapisdk.models.shared;


public enum AttributeActionEnum {
    ADD("ADD"),
    PUT("PUT"),
    DELETE("DELETE");

    public final String value;

    private AttributeActionEnum(String value) {
        this.value = value;
    }
}
