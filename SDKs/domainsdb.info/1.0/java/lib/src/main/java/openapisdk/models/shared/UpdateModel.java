package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("added")
    public String added;
    public UpdateModel withAdded(String added) {
        this.added = added;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("added_download")
    public String addedDownload;
    public UpdateModel withAddedDownload(String addedDownload) {
        this.addedDownload = addedDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public UpdateModel withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public String deleted;
    public UpdateModel withDeleted(String deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted_download")
    public String deletedDownload;
    public UpdateModel withDeletedDownload(String deletedDownload) {
        this.deletedDownload = deletedDownload;
        return this;
    }
}