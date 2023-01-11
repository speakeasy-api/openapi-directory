package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileActionCopyRequestBody {
    @SpeakeasyMetadata("multipartForm:name=destination")
    public String destination;
    public FileActionCopyRequestBody withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=structure")
    public Boolean structure;
    public FileActionCopyRequestBody withStructure(Boolean structure) {
        this.structure = structure;
        return this;
    }
}