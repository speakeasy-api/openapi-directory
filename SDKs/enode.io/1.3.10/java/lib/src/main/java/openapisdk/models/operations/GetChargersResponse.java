package openapisdk.models.operations;



public class GetChargersResponse {
    public String contentType;
    public GetChargersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChargersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema[] onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemas;
    public GetChargersResponse withOnechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemas(openapisdk.models.shared.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema[] onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemas) {
        this.onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemas = onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemas;
        return this;
    }
}