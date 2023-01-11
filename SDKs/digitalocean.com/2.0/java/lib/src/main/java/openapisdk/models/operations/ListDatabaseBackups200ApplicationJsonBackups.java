package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListDatabaseBackups200ApplicationJsonBackups {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListDatabaseBackups200ApplicationJsonBackups withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("size_gigabytes")
    public Double sizeGigabytes;
    public ListDatabaseBackups200ApplicationJsonBackups withSizeGigabytes(Double sizeGigabytes) {
        this.sizeGigabytes = sizeGigabytes;
        return this;
    }
}