package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendDiagnosticInterruptRequest {
    public PostSendDiagnosticInterruptQueryParams queryParams;
    public PostSendDiagnosticInterruptRequest withQueryParams(PostSendDiagnosticInterruptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSendDiagnosticInterruptHeaders headers;
    public PostSendDiagnosticInterruptRequest withHeaders(PostSendDiagnosticInterruptHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSendDiagnosticInterruptRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}