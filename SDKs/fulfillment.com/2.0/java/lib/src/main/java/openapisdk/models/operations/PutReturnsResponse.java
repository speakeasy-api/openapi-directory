package openapisdk.models.operations;



public class PutReturnsResponse {
    public String contentType;
    public PutReturnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public PutReturnsRmaResponseV2 rmaResponseV2;
    public PutReturnsResponse withRmaResponseV2(PutReturnsRmaResponseV2 rmaResponseV2) {
        this.rmaResponseV2 = rmaResponseV2;
        return this;
    }
    public Long statusCode;
    public PutReturnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OneordersGetResponses404ContentApplication1jsonSchema oneordersGetResponses404ContentApplication1jsonSchema;
    public PutReturnsResponse withOneordersGetResponses404ContentApplication1jsonSchema(openapisdk.models.shared.OneordersGetResponses404ContentApplication1jsonSchema oneordersGetResponses404ContentApplication1jsonSchema) {
        this.oneordersGetResponses404ContentApplication1jsonSchema = oneordersGetResponses404ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.OnereturnsPutResponses201ContentApplication1jsonSchema onereturnsPutResponses201ContentApplication1jsonSchema;
    public PutReturnsResponse withOnereturnsPutResponses201ContentApplication1jsonSchema(openapisdk.models.shared.OnereturnsPutResponses201ContentApplication1jsonSchema onereturnsPutResponses201ContentApplication1jsonSchema) {
        this.onereturnsPutResponses201ContentApplication1jsonSchema = onereturnsPutResponses201ContentApplication1jsonSchema;
        return this;
    }
}