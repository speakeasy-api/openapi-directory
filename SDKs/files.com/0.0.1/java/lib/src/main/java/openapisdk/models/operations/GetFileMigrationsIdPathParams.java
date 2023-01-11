package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFileMigrationsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetFileMigrationsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}