package openapisdk.models.operations;



public class AccountCreateJwtResponse {
    public String contentType;
    public AccountCreateJwtResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountCreateJwtResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Jwt jwt;
    public AccountCreateJwtResponse withJwt(openapisdk.models.shared.Jwt jwt) {
        this.jwt = jwt;
        return this;
    }
}