package openapisdk.models.shared;


public enum LicenseSourcesEnum {
    ORDER("order"),
    TRIAL("trial"),
    VOUCHER("voucher"),
    DISTRIBUTOR("distributor"),
    SUBSCRIPTION("subscription"),
    APP_STORE("appStore");

    public final String value;

    private LicenseSourcesEnum(String value) {
        this.value = value;
    }
}
