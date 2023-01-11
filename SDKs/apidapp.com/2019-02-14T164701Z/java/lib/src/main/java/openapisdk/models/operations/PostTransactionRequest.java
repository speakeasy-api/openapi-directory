package openapisdk.models.operations;



public class PostTransactionRequest {
    public PostTransactionSecurity security;
    public PostTransactionRequest withSecurity(PostTransactionSecurity security) {
        this.security = security;
        return this;
    }
}