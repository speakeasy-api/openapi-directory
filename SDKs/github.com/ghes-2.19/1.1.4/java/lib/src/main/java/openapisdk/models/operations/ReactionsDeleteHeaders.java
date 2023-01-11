package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsDeleteHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public ReactionsDeleteHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}