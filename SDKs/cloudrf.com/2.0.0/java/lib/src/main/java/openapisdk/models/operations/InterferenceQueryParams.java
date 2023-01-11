package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InterferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public InterferenceQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=network")
    public String network;
    public InterferenceQueryParams withNetwork(String network) {
        this.network = network;
        return this;
    }
}