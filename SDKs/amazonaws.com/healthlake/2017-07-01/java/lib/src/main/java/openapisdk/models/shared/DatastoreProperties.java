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
 * DatastoreProperties
 * Displays the properties of the Data Store, including the ID, Arn, name, and the status of the Data Store.
**/
public class DatastoreProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public DatastoreProperties withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("DatastoreArn")
    public String datastoreArn;
    public DatastoreProperties withDatastoreArn(String datastoreArn) {
        this.datastoreArn = datastoreArn;
        return this;
    }
    @JsonProperty("DatastoreEndpoint")
    public String datastoreEndpoint;
    public DatastoreProperties withDatastoreEndpoint(String datastoreEndpoint) {
        this.datastoreEndpoint = datastoreEndpoint;
        return this;
    }
    @JsonProperty("DatastoreId")
    public String datastoreId;
    public DatastoreProperties withDatastoreId(String datastoreId) {
        this.datastoreId = datastoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatastoreName")
    public String datastoreName;
    public DatastoreProperties withDatastoreName(String datastoreName) {
        this.datastoreName = datastoreName;
        return this;
    }
    @JsonProperty("DatastoreStatus")
    public DatastoreStatusEnum datastoreStatus;
    public DatastoreProperties withDatastoreStatus(DatastoreStatusEnum datastoreStatus) {
        this.datastoreStatus = datastoreStatus;
        return this;
    }
    @JsonProperty("DatastoreTypeVersion")
    public FhirVersionEnum datastoreTypeVersion;
    public DatastoreProperties withDatastoreTypeVersion(FhirVersionEnum datastoreTypeVersion) {
        this.datastoreTypeVersion = datastoreTypeVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreloadDataConfig")
    public PreloadDataConfig preloadDataConfig;
    public DatastoreProperties withPreloadDataConfig(PreloadDataConfig preloadDataConfig) {
        this.preloadDataConfig = preloadDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SseConfiguration")
    public SseConfiguration sseConfiguration;
    public DatastoreProperties withSseConfiguration(SseConfiguration sseConfiguration) {
        this.sseConfiguration = sseConfiguration;
        return this;
    }
}