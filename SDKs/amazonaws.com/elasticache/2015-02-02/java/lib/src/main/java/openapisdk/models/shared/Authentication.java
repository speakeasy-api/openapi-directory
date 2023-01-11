package openapisdk.models.shared;



/**
 * Authentication
 * Indicates whether the user requires a password to authenticate.
**/
public class Authentication {
    public Long passwordCount;
    public Authentication withPasswordCount(Long passwordCount) {
        this.passwordCount = passwordCount;
        return this;
    }
    public AuthenticationTypeEnum type;
    public Authentication withType(AuthenticationTypeEnum type) {
        this.type = type;
        return this;
    }
}