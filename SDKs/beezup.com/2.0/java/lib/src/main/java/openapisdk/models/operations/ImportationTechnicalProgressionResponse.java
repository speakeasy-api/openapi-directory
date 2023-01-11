package openapisdk.models.operations;



public class ImportationTechnicalProgressionResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ImportationTechnicalProgressionResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ImportationTechnicalProgressionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportationTechnicalProgressionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ImportationTechnicalProgression importationTechnicalProgression;
    public ImportationTechnicalProgressionResponse withImportationTechnicalProgression(openapisdk.models.shared.ImportationTechnicalProgression importationTechnicalProgression) {
        this.importationTechnicalProgression = importationTechnicalProgression;
        return this;
    }
}