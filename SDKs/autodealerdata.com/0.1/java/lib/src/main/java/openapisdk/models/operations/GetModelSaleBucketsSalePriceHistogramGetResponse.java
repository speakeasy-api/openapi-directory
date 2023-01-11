package openapisdk.models.operations;



public class GetModelSaleBucketsSalePriceHistogramGetResponse {
    public openapisdk.models.shared.BucketResp bucketResp;
    public GetModelSaleBucketsSalePriceHistogramGetResponse withBucketResp(openapisdk.models.shared.BucketResp bucketResp) {
        this.bucketResp = bucketResp;
        return this;
    }
    public String contentType;
    public GetModelSaleBucketsSalePriceHistogramGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetModelSaleBucketsSalePriceHistogramGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetModelSaleBucketsSalePriceHistogramGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}