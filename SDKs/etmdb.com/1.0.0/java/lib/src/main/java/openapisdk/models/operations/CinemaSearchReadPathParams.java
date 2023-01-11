package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CinemaSearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CinemaSearchReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}