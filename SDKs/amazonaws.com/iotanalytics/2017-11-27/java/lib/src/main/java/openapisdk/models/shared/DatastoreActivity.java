package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DatastoreActivity
 * The datastore activity that specifies where to store the processed data.
**/
public class DatastoreActivity {
    @JsonProperty("datastoreName")
    public String datastoreName;
    public DatastoreActivity withDatastoreName(String datastoreName) {
        this.datastoreName = datastoreName;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DatastoreActivity withName(String name) {
        this.name = name;
        return this;
    }
}