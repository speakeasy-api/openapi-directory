package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLifecycleConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileSystemId")
    public String fileSystemId;
    public DescribeLifecycleConfigurationPathParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
}