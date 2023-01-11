package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileActionMoveRequestBody {
    @SpeakeasyMetadata("multipartForm:name=destination")
    public String destination;
    public FileActionMoveRequestBody withDestination(String destination) {
        this.destination = destination;
        return this;
    }
}