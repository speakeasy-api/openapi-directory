package openapisdk.models.shared;


public enum DataSourceTypeEnum {
    AWS_LAMBDA("AWS_LAMBDA"),
    AMAZON_DYNAMODB("AMAZON_DYNAMODB"),
    AMAZON_ELASTICSEARCH("AMAZON_ELASTICSEARCH"),
    NONE("NONE"),
    HTTP("HTTP"),
    RELATIONAL_DATABASE("RELATIONAL_DATABASE");

    public final String value;

    private DataSourceTypeEnum(String value) {
        this.value = value;
    }
}
