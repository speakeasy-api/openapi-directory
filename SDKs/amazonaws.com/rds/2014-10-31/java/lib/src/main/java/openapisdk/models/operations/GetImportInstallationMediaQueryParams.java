package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImportInstallationMediaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetImportInstallationMediaActionEnum action;
    public GetImportInstallationMediaQueryParams withAction(GetImportInstallationMediaActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CustomAvailabilityZoneId")
    public String customAvailabilityZoneId;
    public GetImportInstallationMediaQueryParams withCustomAvailabilityZoneId(String customAvailabilityZoneId) {
        this.customAvailabilityZoneId = customAvailabilityZoneId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Engine")
    public String engine;
    public GetImportInstallationMediaQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EngineInstallationMediaPath")
    public String engineInstallationMediaPath;
    public GetImportInstallationMediaQueryParams withEngineInstallationMediaPath(String engineInstallationMediaPath) {
        this.engineInstallationMediaPath = engineInstallationMediaPath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EngineVersion")
    public String engineVersion;
    public GetImportInstallationMediaQueryParams withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OSInstallationMediaPath")
    public String osInstallationMediaPath;
    public GetImportInstallationMediaQueryParams withOsInstallationMediaPath(String osInstallationMediaPath) {
        this.osInstallationMediaPath = osInstallationMediaPath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetImportInstallationMediaVersionEnum version;
    public GetImportInstallationMediaQueryParams withVersion(GetImportInstallationMediaVersionEnum version) {
        this.version = version;
        return this;
    }
}