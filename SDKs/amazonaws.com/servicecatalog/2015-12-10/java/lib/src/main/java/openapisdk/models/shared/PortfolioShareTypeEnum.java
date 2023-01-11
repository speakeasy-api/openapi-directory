package openapisdk.models.shared;


public enum PortfolioShareTypeEnum {
    IMPORTED("IMPORTED"),
    AWS_SERVICECATALOG("AWS_SERVICECATALOG"),
    AWS_ORGANIZATIONS("AWS_ORGANIZATIONS");

    public final String value;

    private PortfolioShareTypeEnum(String value) {
        this.value = value;
    }
}
