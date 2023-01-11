package openapisdk.models.shared;


public enum FirewallDomainUpdateOperationEnum {
    ADD("ADD"),
    REMOVE("REMOVE"),
    REPLACE("REPLACE");

    public final String value;

    private FirewallDomainUpdateOperationEnum(String value) {
        this.value = value;
    }
}
