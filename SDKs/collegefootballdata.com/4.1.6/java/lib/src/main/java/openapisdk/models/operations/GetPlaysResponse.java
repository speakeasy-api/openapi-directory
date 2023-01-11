package openapisdk.models.operations;



public class GetPlaysResponse {
    public String contentType;
    public GetPlaysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Play[] plays;
    public GetPlaysResponse withPlays(openapisdk.models.shared.Play[] plays) {
        this.plays = plays;
        return this;
    }
    public Long statusCode;
    public GetPlaysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}