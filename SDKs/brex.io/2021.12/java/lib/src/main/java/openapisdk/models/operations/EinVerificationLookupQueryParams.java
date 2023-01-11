package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EinVerificationLookupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public EinVerificationLookupQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public EinVerificationLookupQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tight")
    public Boolean tight;
    public EinVerificationLookupQueryParams withTight(Boolean tight) {
        this.tight = tight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public String zip;
    public EinVerificationLookupQueryParams withZip(String zip) {
        this.zip = zip;
        return this;
    }
}