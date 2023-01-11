package openapisdk.models.shared;


public enum HitAccessActionsEnum {
    ACCEPT("Accept"),
    PREVIEW_AND_ACCEPT("PreviewAndAccept"),
    DISCOVER_PREVIEW_AND_ACCEPT("DiscoverPreviewAndAccept");

    public final String value;

    private HitAccessActionsEnum(String value) {
        this.value = value;
    }
}
