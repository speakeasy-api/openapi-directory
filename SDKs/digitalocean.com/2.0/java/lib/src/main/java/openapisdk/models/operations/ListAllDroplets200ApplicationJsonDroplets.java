package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListAllDroplets200ApplicationJsonDroplets {
    @JsonProperty("backup_ids")
    public Long[] backupIds;
    public ListAllDroplets200ApplicationJsonDroplets withBackupIds(Long[] backupIds) {
        this.backupIds = backupIds;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListAllDroplets200ApplicationJsonDroplets withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("disk")
    public Long disk;
    public ListAllDroplets200ApplicationJsonDroplets withDisk(Long disk) {
        this.disk = disk;
        return this;
    }
    @JsonProperty("features")
    public String[] features;
    public ListAllDroplets200ApplicationJsonDroplets withFeatures(String[] features) {
        this.features = features;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public ListAllDroplets200ApplicationJsonDroplets withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image")
    public ListAllDroplets200ApplicationJsonDropletsImage image;
    public ListAllDroplets200ApplicationJsonDroplets withImage(ListAllDroplets200ApplicationJsonDropletsImage image) {
        this.image = image;
        return this;
    }
    @JsonProperty("kernel")
    public ListAllDroplets200ApplicationJsonDropletsKernel kernel;
    public ListAllDroplets200ApplicationJsonDroplets withKernel(ListAllDroplets200ApplicationJsonDropletsKernel kernel) {
        this.kernel = kernel;
        return this;
    }
    @JsonProperty("locked")
    public Boolean locked;
    public ListAllDroplets200ApplicationJsonDroplets withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonProperty("memory")
    public Long memory;
    public ListAllDroplets200ApplicationJsonDroplets withMemory(Long memory) {
        this.memory = memory;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListAllDroplets200ApplicationJsonDroplets withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("networks")
    public ListAllDroplets200ApplicationJsonDropletsNetworks networks;
    public ListAllDroplets200ApplicationJsonDroplets withNetworks(ListAllDroplets200ApplicationJsonDropletsNetworks networks) {
        this.networks = networks;
        return this;
    }
    @JsonProperty("next_backup_window")
    public ListAllDroplets200ApplicationJsonDropletsNextBackupWindow nextBackupWindow;
    public ListAllDroplets200ApplicationJsonDroplets withNextBackupWindow(ListAllDroplets200ApplicationJsonDropletsNextBackupWindow nextBackupWindow) {
        this.nextBackupWindow = nextBackupWindow;
        return this;
    }
    @JsonProperty("region")
    public openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion region;
    public ListAllDroplets200ApplicationJsonDroplets withRegion(openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion region) {
        this.region = region;
        return this;
    }
    @JsonProperty("size")
    public ListAllDroplets200ApplicationJsonDropletsSize size;
    public ListAllDroplets200ApplicationJsonDroplets withSize(ListAllDroplets200ApplicationJsonDropletsSize size) {
        this.size = size;
        return this;
    }
    @JsonProperty("size_slug")
    public String sizeSlug;
    public ListAllDroplets200ApplicationJsonDroplets withSizeSlug(String sizeSlug) {
        this.sizeSlug = sizeSlug;
        return this;
    }
    @JsonProperty("snapshot_ids")
    public Long[] snapshotIds;
    public ListAllDroplets200ApplicationJsonDroplets withSnapshotIds(Long[] snapshotIds) {
        this.snapshotIds = snapshotIds;
        return this;
    }
    @JsonProperty("status")
    public ListAllDroplets200ApplicationJsonDropletsStatusEnum status;
    public ListAllDroplets200ApplicationJsonDroplets withStatus(ListAllDroplets200ApplicationJsonDropletsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("tags")
    public String[] tags;
    public ListAllDroplets200ApplicationJsonDroplets withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("vcpus")
    public Long vcpus;
    public ListAllDroplets200ApplicationJsonDroplets withVcpus(Long vcpus) {
        this.vcpus = vcpus;
        return this;
    }
    @JsonProperty("volume_ids")
    public String[] volumeIds;
    public ListAllDroplets200ApplicationJsonDroplets withVolumeIds(String[] volumeIds) {
        this.volumeIds = volumeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc_uuid")
    public String vpcUuid;
    public ListAllDroplets200ApplicationJsonDroplets withVpcUuid(String vpcUuid) {
        this.vpcUuid = vpcUuid;
        return this;
    }
}