package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportArchiveRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-gzip")
    public byte[] request;
    public ImportArchiveRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}