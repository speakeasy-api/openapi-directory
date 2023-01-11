package openapisdk.models.operations;


public enum GetListofCardsCardsCardStatusEnum {
    LIVE("LIVE"),
    CREATED_ACTIVE("CREATED_ACTIVE"),
    CREATED_INACTIVE("CREATED_INACTIVE"),
    DEACTIVATED("DEACTIVATED");

    public final String value;

    private GetListofCardsCardsCardStatusEnum(String value) {
        this.value = value;
    }
}
