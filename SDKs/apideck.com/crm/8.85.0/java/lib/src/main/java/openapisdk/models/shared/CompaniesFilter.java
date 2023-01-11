package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class CompaniesFilter {
    @SpeakeasyMetadata("queryParam:name=name")
    public String name;
    public CompaniesFilter withName(String name) {
        this.name = name;
        return this;
    }
}