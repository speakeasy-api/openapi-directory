package openapisdk.models.shared;


public enum ExtendedLicensesEnum {
    MULTISEAT("Multiseat"),
    UNLIMITED("Unlimited"),
    RESALE("Resale"),
    INDEMNIFICATION("Indemnification");

    public final String value;

    private ExtendedLicensesEnum(String value) {
        this.value = value;
    }
}
