package openapisdk.models.operations;



public class PutV3BoardsBoardIdAssetsResponse {
    public openapisdk.models.shared.AddBoardAssetsResult addBoardAssetsResult;
    public PutV3BoardsBoardIdAssetsResponse withAddBoardAssetsResult(openapisdk.models.shared.AddBoardAssetsResult addBoardAssetsResult) {
        this.addBoardAssetsResult = addBoardAssetsResult;
        return this;
    }
    public String contentType;
    public PutV3BoardsBoardIdAssetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutV3BoardsBoardIdAssetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}