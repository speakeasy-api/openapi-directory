package openapisdk.models.shared;


public enum LicenseCountingTypeEnum {
    V_CPU("vCPU"),
    INSTANCE("Instance"),
    CORE("Core"),
    SOCKET("Socket");

    public final String value;

    private LicenseCountingTypeEnum(String value) {
        this.value = value;
    }
}
