package openapisdk.models.shared;


public enum DescribePortfolioShareTypeEnum {
    ACCOUNT("ACCOUNT"),
    ORGANIZATION("ORGANIZATION"),
    ORGANIZATIONAL_UNIT("ORGANIZATIONAL_UNIT"),
    ORGANIZATION_MEMBER_ACCOUNT("ORGANIZATION_MEMBER_ACCOUNT");

    public final String value;

    private DescribePortfolioShareTypeEnum(String value) {
        this.value = value;
    }
}
