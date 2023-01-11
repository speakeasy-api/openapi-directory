package openapisdk.models.operations;



public class PostApiV1DonationsCreateRequest {
    public PostApiV1DonationsCreateQueryParams queryParams;
    public PostApiV1DonationsCreateRequest withQueryParams(PostApiV1DonationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostApiV1DonationsCreateSecurity security;
    public PostApiV1DonationsCreateRequest withSecurity(PostApiV1DonationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}