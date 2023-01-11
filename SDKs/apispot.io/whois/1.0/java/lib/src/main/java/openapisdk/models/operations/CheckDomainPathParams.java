package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain")
    public String domain;
    public CheckDomainPathParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}