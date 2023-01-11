package openapisdk.models.operations;



public class GetDomainDetailResponse {
    public String contentType;
    public GetDomainDetailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDomainDetailResponse getDomainDetailResponse;
    public GetDomainDetailResponse withGetDomainDetailResponse(openapisdk.models.shared.GetDomainDetailResponse getDomainDetailResponse) {
        this.getDomainDetailResponse = getDomainDetailResponse;
        return this;
    }
    public Object invalidInput;
    public GetDomainDetailResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Long statusCode;
    public GetDomainDetailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedTLD;
    public GetDomainDetailResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}