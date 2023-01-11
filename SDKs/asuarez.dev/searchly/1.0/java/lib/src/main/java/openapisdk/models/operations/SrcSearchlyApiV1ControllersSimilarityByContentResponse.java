package openapisdk.models.operations;



public class SrcSearchlyApiV1ControllersSimilarityByContentResponse {
    public openapisdk.models.shared.ApiResponseSimilarity apiResponseSimilarity;
    public SrcSearchlyApiV1ControllersSimilarityByContentResponse withApiResponseSimilarity(openapisdk.models.shared.ApiResponseSimilarity apiResponseSimilarity) {
        this.apiResponseSimilarity = apiResponseSimilarity;
        return this;
    }
    public String contentType;
    public SrcSearchlyApiV1ControllersSimilarityByContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SrcSearchlyApiV1ControllersSimilarityByContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String srcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString;
    public SrcSearchlyApiV1ControllersSimilarityByContentResponse withSrcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString(String srcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString) {
        this.srcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString = srcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString;
        return this;
    }
}