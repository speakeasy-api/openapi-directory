package openapisdk.models.operations;



public class PlayMediaOnQueueResponse {
    public String contentType;
    public PlayMediaOnQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Queue queue;
    public PlayMediaOnQueueResponse withQueue(openapisdk.models.shared.Queue queue) {
        this.queue = queue;
        return this;
    }
    public Long statusCode;
    public PlayMediaOnQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}