package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PepRetrieveHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public PepRetrieveAcceptEnum accept;
    public PepRetrieveHeaders withAccept(PepRetrieveAcceptEnum accept) {
        this.accept = accept;
        return this;
    }
}