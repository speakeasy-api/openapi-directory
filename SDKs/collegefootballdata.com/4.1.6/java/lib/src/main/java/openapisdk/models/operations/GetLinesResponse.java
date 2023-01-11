package openapisdk.models.operations;



public class GetLinesResponse {
    public String contentType;
    public GetLinesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GameLines[] gameLines;
    public GetLinesResponse withGameLines(openapisdk.models.shared.GameLines[] gameLines) {
        this.gameLines = gameLines;
        return this;
    }
    public Long statusCode;
    public GetLinesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}