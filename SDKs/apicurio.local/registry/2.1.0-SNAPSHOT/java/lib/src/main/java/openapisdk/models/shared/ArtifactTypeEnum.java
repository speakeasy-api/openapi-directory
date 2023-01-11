package openapisdk.models.shared;


public enum ArtifactTypeEnum {
    AVRO("AVRO"),
    PROTOBUF("PROTOBUF"),
    JSON("JSON"),
    OPENAPI("OPENAPI"),
    ASYNCAPI("ASYNCAPI"),
    GRAPHQL("GRAPHQL"),
    KCONNECT("KCONNECT"),
    WSDL("WSDL"),
    XSD("XSD"),
    XML("XML");

    public final String value;

    private ArtifactTypeEnum(String value) {
        this.value = value;
    }
}
