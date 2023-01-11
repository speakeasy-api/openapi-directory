package openapisdk.models.shared;


public enum DeleteBehaviorEnum {
    LOG("LOG"),
    DELETE_FROM_DATABASE("DELETE_FROM_DATABASE"),
    DEPRECATE_IN_DATABASE("DEPRECATE_IN_DATABASE");

    public final String value;

    private DeleteBehaviorEnum(String value) {
        this.value = value;
    }
}
