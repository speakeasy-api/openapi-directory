package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessSetAcldbPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=databaseName")
    public String databaseName;
    public AccessSetAcldbPathParams withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
}