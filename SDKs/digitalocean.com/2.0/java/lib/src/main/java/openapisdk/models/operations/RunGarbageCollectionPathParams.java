package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunGarbageCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registry_name")
    public String registryName;
    public RunGarbageCollectionPathParams withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
}