package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DestroyWithAssociatedResourcesDangerousHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Dangerous")
    public Boolean xDangerous;
    public DestroyWithAssociatedResourcesDangerousHeaders withXDangerous(Boolean xDangerous) {
        this.xDangerous = xDangerous;
        return this;
    }
}