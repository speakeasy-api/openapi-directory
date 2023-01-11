package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EobsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EobsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}