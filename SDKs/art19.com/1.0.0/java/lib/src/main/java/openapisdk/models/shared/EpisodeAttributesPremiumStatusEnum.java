package openapisdk.models.shared;


public enum EpisodeAttributesPremiumStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    FORCE_ACTIVE("force-active"),
    FORCE_INACTIVE("force-inactive");

    public final String value;

    private EpisodeAttributesPremiumStatusEnum(String value) {
        this.value = value;
    }
}
