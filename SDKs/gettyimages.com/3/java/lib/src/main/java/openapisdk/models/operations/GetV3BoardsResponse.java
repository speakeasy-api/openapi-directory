package openapisdk.models.operations;



public class GetV3BoardsResponse {
    public openapisdk.models.shared.BoardList boardList;
    public GetV3BoardsResponse withBoardList(openapisdk.models.shared.BoardList boardList) {
        this.boardList = boardList;
        return this;
    }
    public String contentType;
    public GetV3BoardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV3BoardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}