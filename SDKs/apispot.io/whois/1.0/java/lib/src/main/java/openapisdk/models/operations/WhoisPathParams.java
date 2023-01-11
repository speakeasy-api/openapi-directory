package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WhoisPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain")
    public String domain;
    public WhoisPathParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}