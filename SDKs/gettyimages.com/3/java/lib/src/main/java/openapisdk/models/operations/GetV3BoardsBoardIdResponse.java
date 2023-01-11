package openapisdk.models.operations;



public class GetV3BoardsBoardIdResponse {
    public openapisdk.models.shared.BoardDetail boardDetail;
    public GetV3BoardsBoardIdResponse withBoardDetail(openapisdk.models.shared.BoardDetail boardDetail) {
        this.boardDetail = boardDetail;
        return this;
    }
    public String contentType;
    public GetV3BoardsBoardIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV3BoardsBoardIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}