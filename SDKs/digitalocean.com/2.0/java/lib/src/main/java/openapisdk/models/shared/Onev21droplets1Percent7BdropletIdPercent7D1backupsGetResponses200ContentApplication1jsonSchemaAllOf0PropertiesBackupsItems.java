package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("min_disk_size")
    public Long minDiskSize;
    public Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems withMinDiskSize(Long minDiskSize) {
        this.minDiskSize = minDiskSize;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("regions")
    public String[] regions;
    public Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems withRegions(String[] regions) {
        this.regions = regions;
        return this;
    }
    @JsonProperty("size_gigabytes")
    public Float sizeGigabytes;
    public Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems withSizeGigabytes(Float sizeGigabytes) {
        this.sizeGigabytes = sizeGigabytes;
        return this;
    }
    @JsonProperty("type")
    public Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum type;
    public Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems withType(Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum type) {
        this.type = type;
        return this;
    }
}