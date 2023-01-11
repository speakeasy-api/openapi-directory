package openapisdk.models.operations;



public class PostV3BoardsResponse {
    public openapisdk.models.shared.BoardCreated boardCreated;
    public PostV3BoardsResponse withBoardCreated(openapisdk.models.shared.BoardCreated boardCreated) {
        this.boardCreated = boardCreated;
        return this;
    }
    public String contentType;
    public PostV3BoardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostV3BoardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}