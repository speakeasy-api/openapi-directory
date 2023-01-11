package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRegistryRepositoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registry_name")
    public String registryName;
    public ListRegistryRepositoriesPathParams withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
}