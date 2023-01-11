package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetaGetOctocatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=s")
    public String s;
    public MetaGetOctocatQueryParams withS(String s) {
        this.s = s;
        return this;
    }
}