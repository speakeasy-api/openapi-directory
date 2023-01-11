package openapisdk.models.operations;


public enum RegisterJobDefinitionRequestBodyTypeEnum {
    CONTAINER("container"),
    MULTINODE("multinode");

    public final String value;

    private RegisterJobDefinitionRequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
