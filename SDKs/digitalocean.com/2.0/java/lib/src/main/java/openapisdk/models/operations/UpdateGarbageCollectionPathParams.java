package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGarbageCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=garbage_collection_uuid")
    public String garbageCollectionUuid;
    public UpdateGarbageCollectionPathParams withGarbageCollectionUuid(String garbageCollectionUuid) {
        this.garbageCollectionUuid = garbageCollectionUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registry_name")
    public String registryName;
    public UpdateGarbageCollectionPathParams withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
}