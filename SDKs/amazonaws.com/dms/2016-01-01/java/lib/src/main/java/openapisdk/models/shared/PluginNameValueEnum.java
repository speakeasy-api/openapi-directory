package openapisdk.models.shared;


public enum PluginNameValueEnum {
    NO_PREFERENCE("no-preference"),
    TEST_DECODING("test-decoding"),
    PGLOGICAL("pglogical");

    public final String value;

    private PluginNameValueEnum(String value) {
        this.value = value;
    }
}
