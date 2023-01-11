package openapisdk.models.operations;


public enum CreateArtifactXRegistryArtifactTypeEnum {
    AVRO("AVRO"),
    PROTOBUF("PROTOBUF"),
    PROTOBUF_FD("PROTOBUF_FD"),
    JSON("JSON"),
    OPENAPI("OPENAPI"),
    ASYNCAPI("ASYNCAPI"),
    GRAPHQL("GRAPHQL"),
    KCONNECT("KCONNECT"),
    WSDL("WSDL"),
    XSD("XSD"),
    XML("XML");

    public final String value;

    private CreateArtifactXRegistryArtifactTypeEnum(String value) {
        this.value = value;
    }
}
