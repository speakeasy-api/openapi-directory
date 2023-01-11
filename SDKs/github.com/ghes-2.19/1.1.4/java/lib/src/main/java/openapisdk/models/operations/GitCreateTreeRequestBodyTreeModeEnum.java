package openapisdk.models.operations;


public enum GitCreateTreeRequestBodyTreeModeEnum {
    ONE_HUNDRED_THOUSAND_SIX_HUNDRED_AND_FORTY_FOUR("100644"),
    ONE_HUNDRED_THOUSAND_SEVEN_HUNDRED_AND_FIFTY_FIVE("100755"),
    FORTY_THOUSAND("040000"),
    ONE_HUNDRED_AND_SIXTY_THOUSAND("160000"),
    ONE_HUNDRED_AND_TWENTY_THOUSAND("120000");

    public final String value;

    private GitCreateTreeRequestBodyTreeModeEnum(String value) {
        this.value = value;
    }
}
