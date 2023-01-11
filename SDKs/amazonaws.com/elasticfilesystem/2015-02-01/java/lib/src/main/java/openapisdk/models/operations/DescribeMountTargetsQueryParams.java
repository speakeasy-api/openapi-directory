package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMountTargetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccessPointId")
    public String accessPointId;
    public DescribeMountTargetsQueryParams withAccessPointId(String accessPointId) {
        this.accessPointId = accessPointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FileSystemId")
    public String fileSystemId;
    public DescribeMountTargetsQueryParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public DescribeMountTargetsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public DescribeMountTargetsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MountTargetId")
    public String mountTargetId;
    public DescribeMountTargetsQueryParams withMountTargetId(String mountTargetId) {
        this.mountTargetId = mountTargetId;
        return this;
    }
}