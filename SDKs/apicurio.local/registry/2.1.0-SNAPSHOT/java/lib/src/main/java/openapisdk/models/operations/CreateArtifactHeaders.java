package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArtifactHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-ArtifactId")
    public String xRegistryArtifactId;
    public CreateArtifactHeaders withXRegistryArtifactId(String xRegistryArtifactId) {
        this.xRegistryArtifactId = xRegistryArtifactId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-ArtifactType")
    public openapisdk.models.shared.ArtifactTypeEnum xRegistryArtifactType;
    public CreateArtifactHeaders withXRegistryArtifactType(openapisdk.models.shared.ArtifactTypeEnum xRegistryArtifactType) {
        this.xRegistryArtifactType = xRegistryArtifactType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-Description")
    public String xRegistryDescription;
    public CreateArtifactHeaders withXRegistryDescription(String xRegistryDescription) {
        this.xRegistryDescription = xRegistryDescription;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-Description-Encoded")
    public String xRegistryDescriptionEncoded;
    public CreateArtifactHeaders withXRegistryDescriptionEncoded(String xRegistryDescriptionEncoded) {
        this.xRegistryDescriptionEncoded = xRegistryDescriptionEncoded;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-Name")
    public String xRegistryName;
    public CreateArtifactHeaders withXRegistryName(String xRegistryName) {
        this.xRegistryName = xRegistryName;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-Name-Encoded")
    public String xRegistryNameEncoded;
    public CreateArtifactHeaders withXRegistryNameEncoded(String xRegistryNameEncoded) {
        this.xRegistryNameEncoded = xRegistryNameEncoded;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-Version")
    public String xRegistryVersion;
    public CreateArtifactHeaders withXRegistryVersion(String xRegistryVersion) {
        this.xRegistryVersion = xRegistryVersion;
        return this;
    }
}