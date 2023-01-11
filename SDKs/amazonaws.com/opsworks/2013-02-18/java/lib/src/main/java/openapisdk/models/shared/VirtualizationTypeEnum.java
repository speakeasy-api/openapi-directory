package openapisdk.models.shared;


public enum VirtualizationTypeEnum {
    PARAVIRTUAL("paravirtual"),
    HVM("hvm");

    public final String value;

    private VirtualizationTypeEnum(String value) {
        this.value = value;
    }
}
