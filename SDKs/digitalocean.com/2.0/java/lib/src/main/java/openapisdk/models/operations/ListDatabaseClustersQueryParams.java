package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatabaseClustersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag_name")
    public String tagName;
    public ListDatabaseClustersQueryParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}