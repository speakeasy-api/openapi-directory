package openapisdk.models.shared;


public enum PrincipalTypeEnum {
    USER("USER"),
    GROUP("GROUP");

    public final String value;

    private PrincipalTypeEnum(String value) {
        this.value = value;
    }
}
