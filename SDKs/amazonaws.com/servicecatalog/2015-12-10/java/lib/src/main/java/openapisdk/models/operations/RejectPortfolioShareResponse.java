package openapisdk.models.operations;



public class RejectPortfolioShareResponse {
    public String contentType;
    public RejectPortfolioShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> rejectPortfolioShareOutput;
    public RejectPortfolioShareResponse withRejectPortfolioShareOutput(java.util.Map<String, Object> rejectPortfolioShareOutput) {
        this.rejectPortfolioShareOutput = rejectPortfolioShareOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public RejectPortfolioShareResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RejectPortfolioShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}