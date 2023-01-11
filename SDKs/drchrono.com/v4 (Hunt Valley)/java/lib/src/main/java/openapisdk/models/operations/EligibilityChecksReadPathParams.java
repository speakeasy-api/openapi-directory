package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EligibilityChecksReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EligibilityChecksReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}