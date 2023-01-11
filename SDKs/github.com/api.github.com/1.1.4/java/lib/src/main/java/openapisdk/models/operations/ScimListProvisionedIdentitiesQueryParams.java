package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScimListProvisionedIdentitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public ScimListProvisionedIdentitiesQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public ScimListProvisionedIdentitiesQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startIndex")
    public Long startIndex;
    public ScimListProvisionedIdentitiesQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}