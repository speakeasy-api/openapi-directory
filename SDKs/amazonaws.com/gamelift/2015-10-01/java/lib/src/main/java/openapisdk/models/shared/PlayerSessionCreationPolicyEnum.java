package openapisdk.models.shared;


public enum PlayerSessionCreationPolicyEnum {
    ACCEPT_ALL("ACCEPT_ALL"),
    DENY_ALL("DENY_ALL");

    public final String value;

    private PlayerSessionCreationPolicyEnum(String value) {
        this.value = value;
    }
}
