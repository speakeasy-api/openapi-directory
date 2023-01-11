package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportDataRequest {
    @SpeakeasyMetadata("request:mediaType=application/zip")
    public byte[] request;
    public ImportDataRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}