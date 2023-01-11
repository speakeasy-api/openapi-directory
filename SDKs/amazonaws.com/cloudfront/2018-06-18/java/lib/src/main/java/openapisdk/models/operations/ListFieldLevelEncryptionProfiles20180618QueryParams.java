package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFieldLevelEncryptionProfiles20180618QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListFieldLevelEncryptionProfiles20180618QueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public ListFieldLevelEncryptionProfiles20180618QueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}