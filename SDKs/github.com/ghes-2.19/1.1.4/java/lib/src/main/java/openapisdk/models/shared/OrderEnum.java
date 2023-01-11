package openapisdk.models.shared;


public enum OrderEnum {
    DESC("desc"),
    ASC("asc");

    public final String value;

    private OrderEnum(String value) {
        this.value = value;
    }
}
