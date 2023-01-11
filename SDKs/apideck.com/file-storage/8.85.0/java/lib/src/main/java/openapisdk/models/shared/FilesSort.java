package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesSort {
    @SpeakeasyMetadata("queryParam:name=by")
    public FilesSortByEnum by;
    public FilesSort withBy(FilesSortByEnum by) {
        this.by = by;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=direction")
    public SortDirectionEnum direction;
    public FilesSort withDirection(SortDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
}