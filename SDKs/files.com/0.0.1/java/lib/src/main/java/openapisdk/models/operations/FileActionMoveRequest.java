package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileActionMoveRequest {
    public FileActionMovePathParams pathParams;
    public FileActionMoveRequest withPathParams(FileActionMovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public FileActionMoveRequestBody request;
    public FileActionMoveRequest withRequest(FileActionMoveRequestBody request) {
        this.request = request;
        return this;
    }
}