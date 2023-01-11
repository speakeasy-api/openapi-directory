package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFileSystemPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileSystemId")
    public String fileSystemId;
    public PutFileSystemPolicyPathParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
}