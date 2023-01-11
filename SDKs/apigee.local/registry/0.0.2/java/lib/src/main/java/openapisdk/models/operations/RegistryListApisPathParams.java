package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryListApisPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryListApisPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}