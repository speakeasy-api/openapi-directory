package openapisdk.models.operations;



public class GetPregameWinProbabilitiesResponse {
    public String contentType;
    public GetPregameWinProbabilitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PregameWp[] pregameWPS;
    public GetPregameWinProbabilitiesResponse withPregameWps(openapisdk.models.shared.PregameWp[] pregameWPS) {
        this.pregameWPS = pregameWPS;
        return this;
    }
    public Long statusCode;
    public GetPregameWinProbabilitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}