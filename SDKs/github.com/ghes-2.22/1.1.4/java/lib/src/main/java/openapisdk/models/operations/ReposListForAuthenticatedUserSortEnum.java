package openapisdk.models.operations;


public enum ReposListForAuthenticatedUserSortEnum {
    CREATED("created"),
    UPDATED("updated"),
    PUSHED("pushed"),
    FULL_NAME("full_name");

    public final String value;

    private ReposListForAuthenticatedUserSortEnum(String value) {
        this.value = value;
    }
}
