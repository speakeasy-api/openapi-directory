package openapisdk.models.shared;


public enum ChallengeNameEnum {
    PASSWORD("Password"),
    MFA("Mfa");

    public final String value;

    private ChallengeNameEnum(String value) {
        this.value = value;
    }
}
