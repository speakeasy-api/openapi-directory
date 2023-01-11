package openapisdk.models.shared;


public enum CollectionTypeEnum {
    ROOT("root"),
    REGULAR("regular"),
    SHARED_WITH_ME("sharedWithMe"),
    SHARED_WITH_GROUP("sharedWithGroup"),
    TRASH("trash");

    public final String value;

    private CollectionTypeEnum(String value) {
        this.value = value;
    }
}
