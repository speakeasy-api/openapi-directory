package openapisdk.models.shared;


public enum InteractionGroupEnum {
    EXISTING_USERS("existing_users"),
    CONTRIBUTORS_ONLY("contributors_only"),
    COLLABORATORS_ONLY("collaborators_only");

    public final String value;

    private InteractionGroupEnum(String value) {
        this.value = value;
    }
}
