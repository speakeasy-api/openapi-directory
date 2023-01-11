package openapisdk.models.shared;


public enum ThingIndexingModeEnum {
    OFF("OFF"),
    REGISTRY("REGISTRY"),
    REGISTRY_AND_SHADOW("REGISTRY_AND_SHADOW");

    public final String value;

    private ThingIndexingModeEnum(String value) {
        this.value = value;
    }
}
