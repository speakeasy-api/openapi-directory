package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems {
    @JsonProperty("backup_ids")
    public Long[] backupIds;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withBackupIds(Long[] backupIds) {
        this.backupIds = backupIds;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("disk")
    public Long disk;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withDisk(Long disk) {
        this.disk = disk;
        return this;
    }
    @JsonProperty("features")
    public String[] features;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withFeatures(String[] features) {
        this.features = features;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image")
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImage image;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withImage(Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImage image) {
        this.image = image;
        return this;
    }
    @JsonProperty("kernel")
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsKernel kernel;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withKernel(Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsKernel kernel) {
        this.kernel = kernel;
        return this;
    }
    @JsonProperty("locked")
    public Boolean locked;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonProperty("memory")
    public Long memory;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withMemory(Long memory) {
        this.memory = memory;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("networks")
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworks networks;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withNetworks(Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworks networks) {
        this.networks = networks;
        return this;
    }
    @JsonProperty("next_backup_window")
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNextBackupWindow nextBackupWindow;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withNextBackupWindow(Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNextBackupWindow nextBackupWindow) {
        this.nextBackupWindow = nextBackupWindow;
        return this;
    }
    @JsonProperty("region")
    public Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion region;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withRegion(Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion region) {
        this.region = region;
        return this;
    }
    @JsonProperty("size")
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsSize size;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withSize(Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsSize size) {
        this.size = size;
        return this;
    }
    @JsonProperty("size_slug")
    public String sizeSlug;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withSizeSlug(String sizeSlug) {
        this.sizeSlug = sizeSlug;
        return this;
    }
    @JsonProperty("snapshot_ids")
    public Long[] snapshotIds;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withSnapshotIds(Long[] snapshotIds) {
        this.snapshotIds = snapshotIds;
        return this;
    }
    @JsonProperty("status")
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsStatusEnum status;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withStatus(Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("tags")
    public String[] tags;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("vcpus")
    public Long vcpus;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withVcpus(Long vcpus) {
        this.vcpus = vcpus;
        return this;
    }
    @JsonProperty("volume_ids")
    public String[] volumeIds;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withVolumeIds(String[] volumeIds) {
        this.volumeIds = volumeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc_uuid")
    public String vpcUuid;
    public Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems withVpcUuid(String vpcUuid) {
        this.vpcUuid = vpcUuid;
        return this;
    }
}