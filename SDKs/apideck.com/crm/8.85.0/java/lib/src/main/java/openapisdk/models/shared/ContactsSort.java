package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsSort {
    @SpeakeasyMetadata("queryParam:name=by")
    public ContactsSortByEnum by;
    public ContactsSort withBy(ContactsSortByEnum by) {
        this.by = by;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=direction")
    public SortDirectionEnum direction;
    public ContactsSort withDirection(SortDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
}