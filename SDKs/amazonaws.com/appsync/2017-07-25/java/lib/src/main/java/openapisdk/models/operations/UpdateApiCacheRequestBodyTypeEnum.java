package openapisdk.models.operations;


public enum UpdateApiCacheRequestBodyTypeEnum {
    T2_SMALL("T2_SMALL"),
    T2_MEDIUM("T2_MEDIUM"),
    R4_LARGE("R4_LARGE"),
    R4_XLARGE("R4_XLARGE"),
    R42_XLARGE("R4_2XLARGE"),
    R44_XLARGE("R4_4XLARGE"),
    R48_XLARGE("R4_8XLARGE"),
    SMALL("SMALL"),
    MEDIUM("MEDIUM"),
    LARGE("LARGE"),
    XLARGE("XLARGE"),
    LARGE2_X("LARGE_2X"),
    LARGE4_X("LARGE_4X"),
    LARGE8_X("LARGE_8X"),
    LARGE12_X("LARGE_12X");

    public final String value;

    private UpdateApiCacheRequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
