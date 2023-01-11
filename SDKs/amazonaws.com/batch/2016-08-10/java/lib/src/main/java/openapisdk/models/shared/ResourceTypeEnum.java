package openapisdk.models.shared;


public enum ResourceTypeEnum {
    GPU("GPU"),
    VCPU("VCPU"),
    MEMORY("MEMORY");

    public final String value;

    private ResourceTypeEnum(String value) {
        this.value = value;
    }
}
