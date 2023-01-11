package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArtifactVersionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-Description")
    public String xRegistryDescription;
    public CreateArtifactVersionHeaders withXRegistryDescription(String xRegistryDescription) {
        this.xRegistryDescription = xRegistryDescription;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-Description-Encoded")
    public String xRegistryDescriptionEncoded;
    public CreateArtifactVersionHeaders withXRegistryDescriptionEncoded(String xRegistryDescriptionEncoded) {
        this.xRegistryDescriptionEncoded = xRegistryDescriptionEncoded;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-Name")
    public String xRegistryName;
    public CreateArtifactVersionHeaders withXRegistryName(String xRegistryName) {
        this.xRegistryName = xRegistryName;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-Name-Encoded")
    public String xRegistryNameEncoded;
    public CreateArtifactVersionHeaders withXRegistryNameEncoded(String xRegistryNameEncoded) {
        this.xRegistryNameEncoded = xRegistryNameEncoded;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-Version")
    public String xRegistryVersion;
    public CreateArtifactVersionHeaders withXRegistryVersion(String xRegistryVersion) {
        this.xRegistryVersion = xRegistryVersion;
        return this;
    }
}