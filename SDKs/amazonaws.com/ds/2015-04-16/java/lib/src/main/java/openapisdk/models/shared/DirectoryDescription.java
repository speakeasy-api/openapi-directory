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
 * DirectoryDescription
 * Contains information about an Directory Service directory.
**/
public class DirectoryDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessUrl")
    public String accessUrl;
    public DirectoryDescription withAccessUrl(String accessUrl) {
        this.accessUrl = accessUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Alias")
    public String alias;
    public DirectoryDescription withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectSettings")
    public DirectoryConnectSettingsDescription connectSettings;
    public DirectoryDescription withConnectSettings(DirectoryConnectSettingsDescription connectSettings) {
        this.connectSettings = connectSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public DirectoryDescription withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DesiredNumberOfDomainControllers")
    public Long desiredNumberOfDomainControllers;
    public DirectoryDescription withDesiredNumberOfDomainControllers(Long desiredNumberOfDomainControllers) {
        this.desiredNumberOfDomainControllers = desiredNumberOfDomainControllers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DirectoryDescription withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsIpAddrs")
    public String[] dnsIpAddrs;
    public DirectoryDescription withDnsIpAddrs(String[] dnsIpAddrs) {
        this.dnsIpAddrs = dnsIpAddrs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Edition")
    public DirectoryEditionEnum edition;
    public DirectoryDescription withEdition(DirectoryEditionEnum edition) {
        this.edition = edition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LaunchTime")
    public OffsetDateTime launchTime;
    public DirectoryDescription withLaunchTime(OffsetDateTime launchTime) {
        this.launchTime = launchTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DirectoryDescription withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerDirectoryDescription")
    public OwnerDirectoryDescription ownerDirectoryDescription;
    public DirectoryDescription withOwnerDirectoryDescription(OwnerDirectoryDescription ownerDirectoryDescription) {
        this.ownerDirectoryDescription = ownerDirectoryDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RadiusSettings")
    public RadiusSettings radiusSettings;
    public DirectoryDescription withRadiusSettings(RadiusSettings radiusSettings) {
        this.radiusSettings = radiusSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RadiusStatus")
    public RadiusStatusEnum radiusStatus;
    public DirectoryDescription withRadiusStatus(RadiusStatusEnum radiusStatus) {
        this.radiusStatus = radiusStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegionsInfo")
    public RegionsInfo regionsInfo;
    public DirectoryDescription withRegionsInfo(RegionsInfo regionsInfo) {
        this.regionsInfo = regionsInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareMethod")
    public ShareMethodEnum shareMethod;
    public DirectoryDescription withShareMethod(ShareMethodEnum shareMethod) {
        this.shareMethod = shareMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareNotes")
    public String shareNotes;
    public DirectoryDescription withShareNotes(String shareNotes) {
        this.shareNotes = shareNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareStatus")
    public ShareStatusEnum shareStatus;
    public DirectoryDescription withShareStatus(ShareStatusEnum shareStatus) {
        this.shareStatus = shareStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShortName")
    public String shortName;
    public DirectoryDescription withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Size")
    public DirectorySizeEnum size;
    public DirectoryDescription withSize(DirectorySizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SsoEnabled")
    public Boolean ssoEnabled;
    public DirectoryDescription withSsoEnabled(Boolean ssoEnabled) {
        this.ssoEnabled = ssoEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Stage")
    public DirectoryStageEnum stage;
    public DirectoryDescription withStage(DirectoryStageEnum stage) {
        this.stage = stage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StageLastUpdatedDateTime")
    public OffsetDateTime stageLastUpdatedDateTime;
    public DirectoryDescription withStageLastUpdatedDateTime(OffsetDateTime stageLastUpdatedDateTime) {
        this.stageLastUpdatedDateTime = stageLastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StageReason")
    public String stageReason;
    public DirectoryDescription withStageReason(String stageReason) {
        this.stageReason = stageReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public DirectoryTypeEnum type;
    public DirectoryDescription withType(DirectoryTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcSettings")
    public DirectoryVpcSettingsDescription vpcSettings;
    public DirectoryDescription withVpcSettings(DirectoryVpcSettingsDescription vpcSettings) {
        this.vpcSettings = vpcSettings;
        return this;
    }
}