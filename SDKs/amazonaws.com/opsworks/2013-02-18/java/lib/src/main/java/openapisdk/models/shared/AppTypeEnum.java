package openapisdk.models.shared;


public enum AppTypeEnum {
    AWS_FLOW_RUBY("aws-flow-ruby"),
    JAVA("java"),
    RAILS("rails"),
    PHP("php"),
    NODEJS("nodejs"),
    STATIC_("static"),
    OTHER("other");

    public final String value;

    private AppTypeEnum(String value) {
        this.value = value;
    }
}
