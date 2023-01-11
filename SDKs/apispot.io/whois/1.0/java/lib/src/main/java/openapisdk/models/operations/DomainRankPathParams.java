package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainRankPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain")
    public String domain;
    public DomainRankPathParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}