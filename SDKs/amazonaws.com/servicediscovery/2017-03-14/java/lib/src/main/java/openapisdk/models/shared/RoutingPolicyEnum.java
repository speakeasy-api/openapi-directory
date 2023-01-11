package openapisdk.models.shared;


public enum RoutingPolicyEnum {
    MULTIVALUE("MULTIVALUE"),
    WEIGHTED("WEIGHTED");

    public final String value;

    private RoutingPolicyEnum(String value) {
        this.value = value;
    }
}
