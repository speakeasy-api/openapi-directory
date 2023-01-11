package openapisdk.models.operations;


public enum UpdateDataSourceRequestBodyTypeEnum {
    AWS_LAMBDA("AWS_LAMBDA"),
    AMAZON_DYNAMODB("AMAZON_DYNAMODB"),
    AMAZON_ELASTICSEARCH("AMAZON_ELASTICSEARCH"),
    NONE("NONE"),
    HTTP("HTTP"),
    RELATIONAL_DATABASE("RELATIONAL_DATABASE");

    public final String value;

    private UpdateDataSourceRequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
