package openapisdk.models.shared;


public enum RuntimeEnum {
    PYTHON3("PYTHON_3"),
    NODEJS12("NODEJS_12");

    public final String value;

    private RuntimeEnum(String value) {
        this.value = value;
    }
}
