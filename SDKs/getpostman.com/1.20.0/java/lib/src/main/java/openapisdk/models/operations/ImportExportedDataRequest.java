package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportExportedDataRequest {
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public ImportExportedDataRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}