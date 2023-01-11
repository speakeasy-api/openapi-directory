package openapisdk.models.operations;



public class GetRateTablesResponse {
    public String contentType;
    public GetRateTablesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RateTableResponse rateTableResponse;
    public GetRateTablesResponse withRateTableResponse(openapisdk.models.shared.RateTableResponse rateTableResponse) {
        this.rateTableResponse = rateTableResponse;
        return this;
    }
    public Long statusCode;
    public GetRateTablesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}