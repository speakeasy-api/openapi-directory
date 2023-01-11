package openapisdk.models.shared;


public enum EnvironmentHealthEnum {
    GREEN("Green"),
    YELLOW("Yellow"),
    RED("Red"),
    GREY("Grey");

    public final String value;

    private EnvironmentHealthEnum(String value) {
        this.value = value;
    }
}
