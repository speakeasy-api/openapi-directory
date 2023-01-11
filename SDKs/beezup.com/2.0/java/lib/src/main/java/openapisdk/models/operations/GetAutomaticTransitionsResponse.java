package openapisdk.models.operations;



public class GetAutomaticTransitionsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetAutomaticTransitionsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetAutomaticTransitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAutomaticTransitionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAutomaticTransitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutomaticTransitionInfoList automaticTransitionInfoList;
    public GetAutomaticTransitionsResponse withAutomaticTransitionInfoList(openapisdk.models.shared.AutomaticTransitionInfoList automaticTransitionInfoList) {
        this.automaticTransitionInfoList = automaticTransitionInfoList;
        return this;
    }
}