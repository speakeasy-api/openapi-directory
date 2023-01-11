package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinLookupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bin")
    public String bin;
    public BinLookupPathParams withBin(String bin) {
        this.bin = bin;
        return this;
    }
}