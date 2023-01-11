package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLifecycleConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileSystemId")
    public String fileSystemId;
    public PutLifecycleConfigurationPathParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
}