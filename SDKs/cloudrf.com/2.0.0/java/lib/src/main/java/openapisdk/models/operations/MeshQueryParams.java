package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeshQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public MeshQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=network")
    public String network;
    public MeshQueryParams withNetwork(String network) {
        this.network = network;
        return this;
    }
}