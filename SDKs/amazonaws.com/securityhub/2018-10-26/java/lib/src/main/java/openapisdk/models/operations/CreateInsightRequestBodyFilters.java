package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateInsightRequestBodyFilters
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
**/
public class CreateInsightRequestBodyFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsAccountId")
    public openapisdk.models.shared.StringFilter[] awsAccountId;
    public CreateInsightRequestBodyFilters withAwsAccountId(openapisdk.models.shared.StringFilter[] awsAccountId) {
        this.awsAccountId = awsAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompanyName")
    public openapisdk.models.shared.StringFilter[] companyName;
    public CreateInsightRequestBodyFilters withCompanyName(openapisdk.models.shared.StringFilter[] companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceStatus")
    public openapisdk.models.shared.StringFilter[] complianceStatus;
    public CreateInsightRequestBodyFilters withComplianceStatus(openapisdk.models.shared.StringFilter[] complianceStatus) {
        this.complianceStatus = complianceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public openapisdk.models.shared.NumberFilter[] confidence;
    public CreateInsightRequestBodyFilters withConfidence(openapisdk.models.shared.NumberFilter[] confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedAt")
    public openapisdk.models.shared.DateFilter[] createdAt;
    public CreateInsightRequestBodyFilters withCreatedAt(openapisdk.models.shared.DateFilter[] createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Criticality")
    public openapisdk.models.shared.NumberFilter[] criticality;
    public CreateInsightRequestBodyFilters withCriticality(openapisdk.models.shared.NumberFilter[] criticality) {
        this.criticality = criticality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public openapisdk.models.shared.StringFilter[] description;
    public CreateInsightRequestBodyFilters withDescription(openapisdk.models.shared.StringFilter[] description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FindingProviderFieldsConfidence")
    public openapisdk.models.shared.NumberFilter[] findingProviderFieldsConfidence;
    public CreateInsightRequestBodyFilters withFindingProviderFieldsConfidence(openapisdk.models.shared.NumberFilter[] findingProviderFieldsConfidence) {
        this.findingProviderFieldsConfidence = findingProviderFieldsConfidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FindingProviderFieldsCriticality")
    public openapisdk.models.shared.NumberFilter[] findingProviderFieldsCriticality;
    public CreateInsightRequestBodyFilters withFindingProviderFieldsCriticality(openapisdk.models.shared.NumberFilter[] findingProviderFieldsCriticality) {
        this.findingProviderFieldsCriticality = findingProviderFieldsCriticality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FindingProviderFieldsRelatedFindingsId")
    public openapisdk.models.shared.StringFilter[] findingProviderFieldsRelatedFindingsId;
    public CreateInsightRequestBodyFilters withFindingProviderFieldsRelatedFindingsId(openapisdk.models.shared.StringFilter[] findingProviderFieldsRelatedFindingsId) {
        this.findingProviderFieldsRelatedFindingsId = findingProviderFieldsRelatedFindingsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FindingProviderFieldsRelatedFindingsProductArn")
    public openapisdk.models.shared.StringFilter[] findingProviderFieldsRelatedFindingsProductArn;
    public CreateInsightRequestBodyFilters withFindingProviderFieldsRelatedFindingsProductArn(openapisdk.models.shared.StringFilter[] findingProviderFieldsRelatedFindingsProductArn) {
        this.findingProviderFieldsRelatedFindingsProductArn = findingProviderFieldsRelatedFindingsProductArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FindingProviderFieldsSeverityLabel")
    public openapisdk.models.shared.StringFilter[] findingProviderFieldsSeverityLabel;
    public CreateInsightRequestBodyFilters withFindingProviderFieldsSeverityLabel(openapisdk.models.shared.StringFilter[] findingProviderFieldsSeverityLabel) {
        this.findingProviderFieldsSeverityLabel = findingProviderFieldsSeverityLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FindingProviderFieldsSeverityOriginal")
    public openapisdk.models.shared.StringFilter[] findingProviderFieldsSeverityOriginal;
    public CreateInsightRequestBodyFilters withFindingProviderFieldsSeverityOriginal(openapisdk.models.shared.StringFilter[] findingProviderFieldsSeverityOriginal) {
        this.findingProviderFieldsSeverityOriginal = findingProviderFieldsSeverityOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FindingProviderFieldsTypes")
    public openapisdk.models.shared.StringFilter[] findingProviderFieldsTypes;
    public CreateInsightRequestBodyFilters withFindingProviderFieldsTypes(openapisdk.models.shared.StringFilter[] findingProviderFieldsTypes) {
        this.findingProviderFieldsTypes = findingProviderFieldsTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstObservedAt")
    public openapisdk.models.shared.DateFilter[] firstObservedAt;
    public CreateInsightRequestBodyFilters withFirstObservedAt(openapisdk.models.shared.DateFilter[] firstObservedAt) {
        this.firstObservedAt = firstObservedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GeneratorId")
    public openapisdk.models.shared.StringFilter[] generatorId;
    public CreateInsightRequestBodyFilters withGeneratorId(openapisdk.models.shared.StringFilter[] generatorId) {
        this.generatorId = generatorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public openapisdk.models.shared.StringFilter[] id;
    public CreateInsightRequestBodyFilters withId(openapisdk.models.shared.StringFilter[] id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keyword")
    public java.util.Map<String, Object> keyword;
    public CreateInsightRequestBodyFilters withKeyword(java.util.Map<String, Object> keyword) {
        this.keyword = keyword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastObservedAt")
    public openapisdk.models.shared.DateFilter[] lastObservedAt;
    public CreateInsightRequestBodyFilters withLastObservedAt(openapisdk.models.shared.DateFilter[] lastObservedAt) {
        this.lastObservedAt = lastObservedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MalwareName")
    public openapisdk.models.shared.StringFilter[] malwareName;
    public CreateInsightRequestBodyFilters withMalwareName(openapisdk.models.shared.StringFilter[] malwareName) {
        this.malwareName = malwareName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MalwarePath")
    public openapisdk.models.shared.StringFilter[] malwarePath;
    public CreateInsightRequestBodyFilters withMalwarePath(openapisdk.models.shared.StringFilter[] malwarePath) {
        this.malwarePath = malwarePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MalwareState")
    public openapisdk.models.shared.StringFilter[] malwareState;
    public CreateInsightRequestBodyFilters withMalwareState(openapisdk.models.shared.StringFilter[] malwareState) {
        this.malwareState = malwareState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MalwareType")
    public openapisdk.models.shared.StringFilter[] malwareType;
    public CreateInsightRequestBodyFilters withMalwareType(openapisdk.models.shared.StringFilter[] malwareType) {
        this.malwareType = malwareType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkDestinationDomain")
    public openapisdk.models.shared.StringFilter[] networkDestinationDomain;
    public CreateInsightRequestBodyFilters withNetworkDestinationDomain(openapisdk.models.shared.StringFilter[] networkDestinationDomain) {
        this.networkDestinationDomain = networkDestinationDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkDestinationIpV4")
    public openapisdk.models.shared.IpFilter[] networkDestinationIpV4;
    public CreateInsightRequestBodyFilters withNetworkDestinationIpV4(openapisdk.models.shared.IpFilter[] networkDestinationIpV4) {
        this.networkDestinationIpV4 = networkDestinationIpV4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkDestinationIpV6")
    public openapisdk.models.shared.IpFilter[] networkDestinationIpV6;
    public CreateInsightRequestBodyFilters withNetworkDestinationIpV6(openapisdk.models.shared.IpFilter[] networkDestinationIpV6) {
        this.networkDestinationIpV6 = networkDestinationIpV6;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkDestinationPort")
    public openapisdk.models.shared.NumberFilter[] networkDestinationPort;
    public CreateInsightRequestBodyFilters withNetworkDestinationPort(openapisdk.models.shared.NumberFilter[] networkDestinationPort) {
        this.networkDestinationPort = networkDestinationPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkDirection")
    public openapisdk.models.shared.StringFilter[] networkDirection;
    public CreateInsightRequestBodyFilters withNetworkDirection(openapisdk.models.shared.StringFilter[] networkDirection) {
        this.networkDirection = networkDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkProtocol")
    public openapisdk.models.shared.StringFilter[] networkProtocol;
    public CreateInsightRequestBodyFilters withNetworkProtocol(openapisdk.models.shared.StringFilter[] networkProtocol) {
        this.networkProtocol = networkProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkSourceDomain")
    public openapisdk.models.shared.StringFilter[] networkSourceDomain;
    public CreateInsightRequestBodyFilters withNetworkSourceDomain(openapisdk.models.shared.StringFilter[] networkSourceDomain) {
        this.networkSourceDomain = networkSourceDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkSourceIpV4")
    public openapisdk.models.shared.IpFilter[] networkSourceIpV4;
    public CreateInsightRequestBodyFilters withNetworkSourceIpV4(openapisdk.models.shared.IpFilter[] networkSourceIpV4) {
        this.networkSourceIpV4 = networkSourceIpV4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkSourceIpV6")
    public openapisdk.models.shared.IpFilter[] networkSourceIpV6;
    public CreateInsightRequestBodyFilters withNetworkSourceIpV6(openapisdk.models.shared.IpFilter[] networkSourceIpV6) {
        this.networkSourceIpV6 = networkSourceIpV6;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkSourceMac")
    public openapisdk.models.shared.StringFilter[] networkSourceMac;
    public CreateInsightRequestBodyFilters withNetworkSourceMac(openapisdk.models.shared.StringFilter[] networkSourceMac) {
        this.networkSourceMac = networkSourceMac;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkSourcePort")
    public openapisdk.models.shared.NumberFilter[] networkSourcePort;
    public CreateInsightRequestBodyFilters withNetworkSourcePort(openapisdk.models.shared.NumberFilter[] networkSourcePort) {
        this.networkSourcePort = networkSourcePort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NoteText")
    public openapisdk.models.shared.StringFilter[] noteText;
    public CreateInsightRequestBodyFilters withNoteText(openapisdk.models.shared.StringFilter[] noteText) {
        this.noteText = noteText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NoteUpdatedAt")
    public openapisdk.models.shared.DateFilter[] noteUpdatedAt;
    public CreateInsightRequestBodyFilters withNoteUpdatedAt(openapisdk.models.shared.DateFilter[] noteUpdatedAt) {
        this.noteUpdatedAt = noteUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NoteUpdatedBy")
    public openapisdk.models.shared.StringFilter[] noteUpdatedBy;
    public CreateInsightRequestBodyFilters withNoteUpdatedBy(openapisdk.models.shared.StringFilter[] noteUpdatedBy) {
        this.noteUpdatedBy = noteUpdatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessLaunchedAt")
    public openapisdk.models.shared.DateFilter[] processLaunchedAt;
    public CreateInsightRequestBodyFilters withProcessLaunchedAt(openapisdk.models.shared.DateFilter[] processLaunchedAt) {
        this.processLaunchedAt = processLaunchedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessName")
    public openapisdk.models.shared.StringFilter[] processName;
    public CreateInsightRequestBodyFilters withProcessName(openapisdk.models.shared.StringFilter[] processName) {
        this.processName = processName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessParentPid")
    public openapisdk.models.shared.NumberFilter[] processParentPid;
    public CreateInsightRequestBodyFilters withProcessParentPid(openapisdk.models.shared.NumberFilter[] processParentPid) {
        this.processParentPid = processParentPid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessPath")
    public openapisdk.models.shared.StringFilter[] processPath;
    public CreateInsightRequestBodyFilters withProcessPath(openapisdk.models.shared.StringFilter[] processPath) {
        this.processPath = processPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessPid")
    public openapisdk.models.shared.NumberFilter[] processPid;
    public CreateInsightRequestBodyFilters withProcessPid(openapisdk.models.shared.NumberFilter[] processPid) {
        this.processPid = processPid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessTerminatedAt")
    public openapisdk.models.shared.DateFilter[] processTerminatedAt;
    public CreateInsightRequestBodyFilters withProcessTerminatedAt(openapisdk.models.shared.DateFilter[] processTerminatedAt) {
        this.processTerminatedAt = processTerminatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductArn")
    public openapisdk.models.shared.StringFilter[] productArn;
    public CreateInsightRequestBodyFilters withProductArn(openapisdk.models.shared.StringFilter[] productArn) {
        this.productArn = productArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductFields")
    public openapisdk.models.shared.MapFilter[] productFields;
    public CreateInsightRequestBodyFilters withProductFields(openapisdk.models.shared.MapFilter[] productFields) {
        this.productFields = productFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductName")
    public openapisdk.models.shared.StringFilter[] productName;
    public CreateInsightRequestBodyFilters withProductName(openapisdk.models.shared.StringFilter[] productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationText")
    public openapisdk.models.shared.StringFilter[] recommendationText;
    public CreateInsightRequestBodyFilters withRecommendationText(openapisdk.models.shared.StringFilter[] recommendationText) {
        this.recommendationText = recommendationText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordState")
    public openapisdk.models.shared.StringFilter[] recordState;
    public CreateInsightRequestBodyFilters withRecordState(openapisdk.models.shared.StringFilter[] recordState) {
        this.recordState = recordState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Region")
    public openapisdk.models.shared.StringFilter[] region;
    public CreateInsightRequestBodyFilters withRegion(openapisdk.models.shared.StringFilter[] region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelatedFindingsId")
    public openapisdk.models.shared.StringFilter[] relatedFindingsId;
    public CreateInsightRequestBodyFilters withRelatedFindingsId(openapisdk.models.shared.StringFilter[] relatedFindingsId) {
        this.relatedFindingsId = relatedFindingsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelatedFindingsProductArn")
    public openapisdk.models.shared.StringFilter[] relatedFindingsProductArn;
    public CreateInsightRequestBodyFilters withRelatedFindingsProductArn(openapisdk.models.shared.StringFilter[] relatedFindingsProductArn) {
        this.relatedFindingsProductArn = relatedFindingsProductArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsEc2InstanceIamInstanceProfileArn")
    public openapisdk.models.shared.StringFilter[] resourceAwsEc2InstanceIamInstanceProfileArn;
    public CreateInsightRequestBodyFilters withResourceAwsEc2InstanceIamInstanceProfileArn(openapisdk.models.shared.StringFilter[] resourceAwsEc2InstanceIamInstanceProfileArn) {
        this.resourceAwsEc2InstanceIamInstanceProfileArn = resourceAwsEc2InstanceIamInstanceProfileArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsEc2InstanceImageId")
    public openapisdk.models.shared.StringFilter[] resourceAwsEc2InstanceImageId;
    public CreateInsightRequestBodyFilters withResourceAwsEc2InstanceImageId(openapisdk.models.shared.StringFilter[] resourceAwsEc2InstanceImageId) {
        this.resourceAwsEc2InstanceImageId = resourceAwsEc2InstanceImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsEc2InstanceIpV4Addresses")
    public openapisdk.models.shared.IpFilter[] resourceAwsEc2InstanceIpV4Addresses;
    public CreateInsightRequestBodyFilters withResourceAwsEc2InstanceIpV4Addresses(openapisdk.models.shared.IpFilter[] resourceAwsEc2InstanceIpV4Addresses) {
        this.resourceAwsEc2InstanceIpV4Addresses = resourceAwsEc2InstanceIpV4Addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsEc2InstanceIpV6Addresses")
    public openapisdk.models.shared.IpFilter[] resourceAwsEc2InstanceIpV6Addresses;
    public CreateInsightRequestBodyFilters withResourceAwsEc2InstanceIpV6Addresses(openapisdk.models.shared.IpFilter[] resourceAwsEc2InstanceIpV6Addresses) {
        this.resourceAwsEc2InstanceIpV6Addresses = resourceAwsEc2InstanceIpV6Addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsEc2InstanceKeyName")
    public openapisdk.models.shared.StringFilter[] resourceAwsEc2InstanceKeyName;
    public CreateInsightRequestBodyFilters withResourceAwsEc2InstanceKeyName(openapisdk.models.shared.StringFilter[] resourceAwsEc2InstanceKeyName) {
        this.resourceAwsEc2InstanceKeyName = resourceAwsEc2InstanceKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsEc2InstanceLaunchedAt")
    public openapisdk.models.shared.DateFilter[] resourceAwsEc2InstanceLaunchedAt;
    public CreateInsightRequestBodyFilters withResourceAwsEc2InstanceLaunchedAt(openapisdk.models.shared.DateFilter[] resourceAwsEc2InstanceLaunchedAt) {
        this.resourceAwsEc2InstanceLaunchedAt = resourceAwsEc2InstanceLaunchedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsEc2InstanceSubnetId")
    public openapisdk.models.shared.StringFilter[] resourceAwsEc2InstanceSubnetId;
    public CreateInsightRequestBodyFilters withResourceAwsEc2InstanceSubnetId(openapisdk.models.shared.StringFilter[] resourceAwsEc2InstanceSubnetId) {
        this.resourceAwsEc2InstanceSubnetId = resourceAwsEc2InstanceSubnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsEc2InstanceType")
    public openapisdk.models.shared.StringFilter[] resourceAwsEc2InstanceType;
    public CreateInsightRequestBodyFilters withResourceAwsEc2InstanceType(openapisdk.models.shared.StringFilter[] resourceAwsEc2InstanceType) {
        this.resourceAwsEc2InstanceType = resourceAwsEc2InstanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsEc2InstanceVpcId")
    public openapisdk.models.shared.StringFilter[] resourceAwsEc2InstanceVpcId;
    public CreateInsightRequestBodyFilters withResourceAwsEc2InstanceVpcId(openapisdk.models.shared.StringFilter[] resourceAwsEc2InstanceVpcId) {
        this.resourceAwsEc2InstanceVpcId = resourceAwsEc2InstanceVpcId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsIamAccessKeyCreatedAt")
    public openapisdk.models.shared.DateFilter[] resourceAwsIamAccessKeyCreatedAt;
    public CreateInsightRequestBodyFilters withResourceAwsIamAccessKeyCreatedAt(openapisdk.models.shared.DateFilter[] resourceAwsIamAccessKeyCreatedAt) {
        this.resourceAwsIamAccessKeyCreatedAt = resourceAwsIamAccessKeyCreatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsIamAccessKeyPrincipalName")
    public openapisdk.models.shared.StringFilter[] resourceAwsIamAccessKeyPrincipalName;
    public CreateInsightRequestBodyFilters withResourceAwsIamAccessKeyPrincipalName(openapisdk.models.shared.StringFilter[] resourceAwsIamAccessKeyPrincipalName) {
        this.resourceAwsIamAccessKeyPrincipalName = resourceAwsIamAccessKeyPrincipalName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsIamAccessKeyStatus")
    public openapisdk.models.shared.StringFilter[] resourceAwsIamAccessKeyStatus;
    public CreateInsightRequestBodyFilters withResourceAwsIamAccessKeyStatus(openapisdk.models.shared.StringFilter[] resourceAwsIamAccessKeyStatus) {
        this.resourceAwsIamAccessKeyStatus = resourceAwsIamAccessKeyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsIamAccessKeyUserName")
    public java.util.Map<String, Object> resourceAwsIamAccessKeyUserName;
    public CreateInsightRequestBodyFilters withResourceAwsIamAccessKeyUserName(java.util.Map<String, Object> resourceAwsIamAccessKeyUserName) {
        this.resourceAwsIamAccessKeyUserName = resourceAwsIamAccessKeyUserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsIamUserUserName")
    public openapisdk.models.shared.StringFilter[] resourceAwsIamUserUserName;
    public CreateInsightRequestBodyFilters withResourceAwsIamUserUserName(openapisdk.models.shared.StringFilter[] resourceAwsIamUserUserName) {
        this.resourceAwsIamUserUserName = resourceAwsIamUserUserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsS3BucketOwnerId")
    public openapisdk.models.shared.StringFilter[] resourceAwsS3BucketOwnerId;
    public CreateInsightRequestBodyFilters withResourceAwsS3BucketOwnerId(openapisdk.models.shared.StringFilter[] resourceAwsS3BucketOwnerId) {
        this.resourceAwsS3BucketOwnerId = resourceAwsS3BucketOwnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAwsS3BucketOwnerName")
    public openapisdk.models.shared.StringFilter[] resourceAwsS3BucketOwnerName;
    public CreateInsightRequestBodyFilters withResourceAwsS3BucketOwnerName(openapisdk.models.shared.StringFilter[] resourceAwsS3BucketOwnerName) {
        this.resourceAwsS3BucketOwnerName = resourceAwsS3BucketOwnerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceContainerImageId")
    public openapisdk.models.shared.StringFilter[] resourceContainerImageId;
    public CreateInsightRequestBodyFilters withResourceContainerImageId(openapisdk.models.shared.StringFilter[] resourceContainerImageId) {
        this.resourceContainerImageId = resourceContainerImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceContainerImageName")
    public openapisdk.models.shared.StringFilter[] resourceContainerImageName;
    public CreateInsightRequestBodyFilters withResourceContainerImageName(openapisdk.models.shared.StringFilter[] resourceContainerImageName) {
        this.resourceContainerImageName = resourceContainerImageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceContainerLaunchedAt")
    public openapisdk.models.shared.DateFilter[] resourceContainerLaunchedAt;
    public CreateInsightRequestBodyFilters withResourceContainerLaunchedAt(openapisdk.models.shared.DateFilter[] resourceContainerLaunchedAt) {
        this.resourceContainerLaunchedAt = resourceContainerLaunchedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceContainerName")
    public openapisdk.models.shared.StringFilter[] resourceContainerName;
    public CreateInsightRequestBodyFilters withResourceContainerName(openapisdk.models.shared.StringFilter[] resourceContainerName) {
        this.resourceContainerName = resourceContainerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceDetailsOther")
    public openapisdk.models.shared.MapFilter[] resourceDetailsOther;
    public CreateInsightRequestBodyFilters withResourceDetailsOther(openapisdk.models.shared.MapFilter[] resourceDetailsOther) {
        this.resourceDetailsOther = resourceDetailsOther;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public openapisdk.models.shared.StringFilter[] resourceId;
    public CreateInsightRequestBodyFilters withResourceId(openapisdk.models.shared.StringFilter[] resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourcePartition")
    public openapisdk.models.shared.StringFilter[] resourcePartition;
    public CreateInsightRequestBodyFilters withResourcePartition(openapisdk.models.shared.StringFilter[] resourcePartition) {
        this.resourcePartition = resourcePartition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceRegion")
    public openapisdk.models.shared.StringFilter[] resourceRegion;
    public CreateInsightRequestBodyFilters withResourceRegion(openapisdk.models.shared.StringFilter[] resourceRegion) {
        this.resourceRegion = resourceRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceTags")
    public openapisdk.models.shared.MapFilter[] resourceTags;
    public CreateInsightRequestBodyFilters withResourceTags(openapisdk.models.shared.MapFilter[] resourceTags) {
        this.resourceTags = resourceTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public openapisdk.models.shared.StringFilter[] resourceType;
    public CreateInsightRequestBodyFilters withResourceType(openapisdk.models.shared.StringFilter[] resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SeverityLabel")
    public openapisdk.models.shared.StringFilter[] severityLabel;
    public CreateInsightRequestBodyFilters withSeverityLabel(openapisdk.models.shared.StringFilter[] severityLabel) {
        this.severityLabel = severityLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SeverityNormalized")
    public java.util.Map<String, Object> severityNormalized;
    public CreateInsightRequestBodyFilters withSeverityNormalized(java.util.Map<String, Object> severityNormalized) {
        this.severityNormalized = severityNormalized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SeverityProduct")
    public java.util.Map<String, Object> severityProduct;
    public CreateInsightRequestBodyFilters withSeverityProduct(java.util.Map<String, Object> severityProduct) {
        this.severityProduct = severityProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceUrl")
    public openapisdk.models.shared.StringFilter[] sourceUrl;
    public CreateInsightRequestBodyFilters withSourceUrl(openapisdk.models.shared.StringFilter[] sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThreatIntelIndicatorCategory")
    public openapisdk.models.shared.StringFilter[] threatIntelIndicatorCategory;
    public CreateInsightRequestBodyFilters withThreatIntelIndicatorCategory(openapisdk.models.shared.StringFilter[] threatIntelIndicatorCategory) {
        this.threatIntelIndicatorCategory = threatIntelIndicatorCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThreatIntelIndicatorLastObservedAt")
    public openapisdk.models.shared.DateFilter[] threatIntelIndicatorLastObservedAt;
    public CreateInsightRequestBodyFilters withThreatIntelIndicatorLastObservedAt(openapisdk.models.shared.DateFilter[] threatIntelIndicatorLastObservedAt) {
        this.threatIntelIndicatorLastObservedAt = threatIntelIndicatorLastObservedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThreatIntelIndicatorSource")
    public openapisdk.models.shared.StringFilter[] threatIntelIndicatorSource;
    public CreateInsightRequestBodyFilters withThreatIntelIndicatorSource(openapisdk.models.shared.StringFilter[] threatIntelIndicatorSource) {
        this.threatIntelIndicatorSource = threatIntelIndicatorSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThreatIntelIndicatorSourceUrl")
    public openapisdk.models.shared.StringFilter[] threatIntelIndicatorSourceUrl;
    public CreateInsightRequestBodyFilters withThreatIntelIndicatorSourceUrl(openapisdk.models.shared.StringFilter[] threatIntelIndicatorSourceUrl) {
        this.threatIntelIndicatorSourceUrl = threatIntelIndicatorSourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThreatIntelIndicatorType")
    public openapisdk.models.shared.StringFilter[] threatIntelIndicatorType;
    public CreateInsightRequestBodyFilters withThreatIntelIndicatorType(openapisdk.models.shared.StringFilter[] threatIntelIndicatorType) {
        this.threatIntelIndicatorType = threatIntelIndicatorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThreatIntelIndicatorValue")
    public openapisdk.models.shared.StringFilter[] threatIntelIndicatorValue;
    public CreateInsightRequestBodyFilters withThreatIntelIndicatorValue(openapisdk.models.shared.StringFilter[] threatIntelIndicatorValue) {
        this.threatIntelIndicatorValue = threatIntelIndicatorValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public openapisdk.models.shared.StringFilter[] title;
    public CreateInsightRequestBodyFilters withTitle(openapisdk.models.shared.StringFilter[] title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public openapisdk.models.shared.StringFilter[] type;
    public CreateInsightRequestBodyFilters withType(openapisdk.models.shared.StringFilter[] type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedAt")
    public openapisdk.models.shared.DateFilter[] updatedAt;
    public CreateInsightRequestBodyFilters withUpdatedAt(openapisdk.models.shared.DateFilter[] updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserDefinedFields")
    public openapisdk.models.shared.MapFilter[] userDefinedFields;
    public CreateInsightRequestBodyFilters withUserDefinedFields(openapisdk.models.shared.MapFilter[] userDefinedFields) {
        this.userDefinedFields = userDefinedFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VerificationState")
    public openapisdk.models.shared.StringFilter[] verificationState;
    public CreateInsightRequestBodyFilters withVerificationState(openapisdk.models.shared.StringFilter[] verificationState) {
        this.verificationState = verificationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkflowState")
    public openapisdk.models.shared.StringFilter[] workflowState;
    public CreateInsightRequestBodyFilters withWorkflowState(openapisdk.models.shared.StringFilter[] workflowState) {
        this.workflowState = workflowState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkflowStatus")
    public openapisdk.models.shared.StringFilter[] workflowStatus;
    public CreateInsightRequestBodyFilters withWorkflowStatus(openapisdk.models.shared.StringFilter[] workflowStatus) {
        this.workflowStatus = workflowStatus;
        return this;
    }
}