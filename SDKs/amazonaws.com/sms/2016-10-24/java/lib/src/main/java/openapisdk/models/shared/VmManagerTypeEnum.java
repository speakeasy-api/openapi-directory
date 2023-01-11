package openapisdk.models.shared;


public enum VmManagerTypeEnum {
    VSPHERE("VSPHERE"),
    SCVMM("SCVMM"),
    HYPERV_MANAGER("HYPERV-MANAGER");

    public final String value;

    private VmManagerTypeEnum(String value) {
        this.value = value;
    }
}
