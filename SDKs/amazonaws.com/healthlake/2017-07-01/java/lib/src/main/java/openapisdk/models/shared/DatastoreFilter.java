package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DatastoreFilter
 * The filters applied to Data Store query.
**/
public class DatastoreFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAfter")
    public OffsetDateTime createdAfter;
    public DatastoreFilter withCreatedAfter(OffsetDateTime createdAfter) {
        this.createdAfter = createdAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedBefore")
    public OffsetDateTime createdBefore;
    public DatastoreFilter withCreatedBefore(OffsetDateTime createdBefore) {
        this.createdBefore = createdBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatastoreName")
    public String datastoreName;
    public DatastoreFilter withDatastoreName(String datastoreName) {
        this.datastoreName = datastoreName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatastoreStatus")
    public DatastoreStatusEnum datastoreStatus;
    public DatastoreFilter withDatastoreStatus(DatastoreStatusEnum datastoreStatus) {
        this.datastoreStatus = datastoreStatus;
        return this;
    }
}