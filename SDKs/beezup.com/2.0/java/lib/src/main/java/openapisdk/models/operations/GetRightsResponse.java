package openapisdk.models.operations;



public class GetRightsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetRightsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetRightsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRightsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FunctionalityRightInfo[] functionalityRightInfos;
    public GetRightsResponse withFunctionalityRightInfos(openapisdk.models.shared.FunctionalityRightInfo[] functionalityRightInfos) {
        this.functionalityRightInfos = functionalityRightInfos;
        return this;
    }
}