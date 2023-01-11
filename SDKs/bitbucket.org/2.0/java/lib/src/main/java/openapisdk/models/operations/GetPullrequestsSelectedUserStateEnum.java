package openapisdk.models.operations;


public enum GetPullrequestsSelectedUserStateEnum {
    MERGED("MERGED"),
    SUPERSEDED("SUPERSEDED"),
    OPEN("OPEN"),
    DECLINED("DECLINED");

    public final String value;

    private GetPullrequestsSelectedUserStateEnum(String value) {
        this.value = value;
    }
}
