package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGarbageCollectionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registry_name")
    public String registryName;
    public ListGarbageCollectionsPathParams withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
}