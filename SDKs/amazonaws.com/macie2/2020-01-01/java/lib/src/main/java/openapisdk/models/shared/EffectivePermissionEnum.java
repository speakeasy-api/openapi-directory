package openapisdk.models.shared;


public enum EffectivePermissionEnum {
    PUBLIC_("PUBLIC"),
    NOT_PUBLIC("NOT_PUBLIC"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private EffectivePermissionEnum(String value) {
        this.value = value;
    }
}
