package openapisdk.models.shared;


public enum AssetLicenseNameEnum {
    STANDARD("Standard"),
    MULTISEAT("Multiseat"),
    UNLIMITED("Unlimited"),
    RESALE("Resale"),
    INDEMNIFICATION("Indemnification");

    public final String value;

    private AssetLicenseNameEnum(String value) {
        this.value = value;
    }
}
