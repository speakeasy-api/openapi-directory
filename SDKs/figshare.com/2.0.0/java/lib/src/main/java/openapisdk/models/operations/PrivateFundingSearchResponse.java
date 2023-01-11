package openapisdk.models.operations;



public class PrivateFundingSearchResponse {
    public String contentType;
    public PrivateFundingSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateFundingSearchResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.FundingInformation[] fundingInformations;
    public PrivateFundingSearchResponse withFundingInformations(openapisdk.models.shared.FundingInformation[] fundingInformations) {
        this.fundingInformations = fundingInformations;
        return this;
    }
    public Long statusCode;
    public PrivateFundingSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}