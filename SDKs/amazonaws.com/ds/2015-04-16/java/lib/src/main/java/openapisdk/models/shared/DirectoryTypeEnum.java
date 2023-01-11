package openapisdk.models.shared;


public enum DirectoryTypeEnum {
    SIMPLE_AD("SimpleAD"),
    AD_CONNECTOR("ADConnector"),
    MICROSOFT_AD("MicrosoftAD"),
    SHARED_MICROSOFT_AD("SharedMicrosoftAD");

    public final String value;

    private DirectoryTypeEnum(String value) {
        this.value = value;
    }
}
