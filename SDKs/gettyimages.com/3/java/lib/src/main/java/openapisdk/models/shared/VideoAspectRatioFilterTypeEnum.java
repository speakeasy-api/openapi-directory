package openapisdk.models.shared;


public enum VideoAspectRatioFilterTypeEnum {
    SIXTEEN9("16:9"),
    NINE16("9:16"),
    THREE4("3:4"),
    FOUR3("4:3"),
    FOUR5("4:5"),
    TWO1("2:1"),
    SEVENTEEN9("17:9"),
    NINE17("9:17");

    public final String value;

    private VideoAspectRatioFilterTypeEnum(String value) {
        this.value = value;
    }
}
