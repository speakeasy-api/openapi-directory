package openapisdk.models.shared;


public enum AlgorithmicStemmingEnum {
    NONE("none"),
    MINIMAL("minimal"),
    LIGHT("light"),
    FULL("full");

    public final String value;

    private AlgorithmicStemmingEnum(String value) {
        this.value = value;
    }
}
