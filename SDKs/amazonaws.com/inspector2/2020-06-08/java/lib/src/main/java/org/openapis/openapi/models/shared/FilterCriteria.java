/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FilterCriteria - Details on the criteria used to define the filter.
 */
public class FilterCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsAccountId")
    public StringFilter[] awsAccountId;

    public FilterCriteria withAwsAccountId(StringFilter[] awsAccountId) {
        this.awsAccountId = awsAccountId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentId")
    public StringFilter[] componentId;

    public FilterCriteria withComponentId(StringFilter[] componentId) {
        this.componentId = componentId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentType")
    public StringFilter[] componentType;

    public FilterCriteria withComponentType(StringFilter[] componentType) {
        this.componentType = componentType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2InstanceImageId")
    public StringFilter[] ec2InstanceImageId;

    public FilterCriteria withEc2InstanceImageId(StringFilter[] ec2InstanceImageId) {
        this.ec2InstanceImageId = ec2InstanceImageId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2InstanceSubnetId")
    public StringFilter[] ec2InstanceSubnetId;

    public FilterCriteria withEc2InstanceSubnetId(StringFilter[] ec2InstanceSubnetId) {
        this.ec2InstanceSubnetId = ec2InstanceSubnetId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2InstanceVpcId")
    public StringFilter[] ec2InstanceVpcId;

    public FilterCriteria withEc2InstanceVpcId(StringFilter[] ec2InstanceVpcId) {
        this.ec2InstanceVpcId = ec2InstanceVpcId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecrImageArchitecture")
    public StringFilter[] ecrImageArchitecture;

    public FilterCriteria withEcrImageArchitecture(StringFilter[] ecrImageArchitecture) {
        this.ecrImageArchitecture = ecrImageArchitecture;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecrImageHash")
    public StringFilter[] ecrImageHash;

    public FilterCriteria withEcrImageHash(StringFilter[] ecrImageHash) {
        this.ecrImageHash = ecrImageHash;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecrImagePushedAt")
    public DateFilter[] ecrImagePushedAt;

    public FilterCriteria withEcrImagePushedAt(DateFilter[] ecrImagePushedAt) {
        this.ecrImagePushedAt = ecrImagePushedAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecrImageRegistry")
    public StringFilter[] ecrImageRegistry;

    public FilterCriteria withEcrImageRegistry(StringFilter[] ecrImageRegistry) {
        this.ecrImageRegistry = ecrImageRegistry;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecrImageRepositoryName")
    public StringFilter[] ecrImageRepositoryName;

    public FilterCriteria withEcrImageRepositoryName(StringFilter[] ecrImageRepositoryName) {
        this.ecrImageRepositoryName = ecrImageRepositoryName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecrImageTags")
    public StringFilter[] ecrImageTags;

    public FilterCriteria withEcrImageTags(StringFilter[] ecrImageTags) {
        this.ecrImageTags = ecrImageTags;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exploitAvailable")
    public StringFilter[] exploitAvailable;

    public FilterCriteria withExploitAvailable(StringFilter[] exploitAvailable) {
        this.exploitAvailable = exploitAvailable;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingArn")
    public StringFilter[] findingArn;

    public FilterCriteria withFindingArn(StringFilter[] findingArn) {
        this.findingArn = findingArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingStatus")
    public StringFilter[] findingStatus;

    public FilterCriteria withFindingStatus(StringFilter[] findingStatus) {
        this.findingStatus = findingStatus;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingType")
    public StringFilter[] findingType;

    public FilterCriteria withFindingType(StringFilter[] findingType) {
        this.findingType = findingType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstObservedAt")
    public DateFilter[] firstObservedAt;

    public FilterCriteria withFirstObservedAt(DateFilter[] firstObservedAt) {
        this.firstObservedAt = firstObservedAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixAvailable")
    public StringFilter[] fixAvailable;

    public FilterCriteria withFixAvailable(StringFilter[] fixAvailable) {
        this.fixAvailable = fixAvailable;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectorScore")
    public NumberFilter[] inspectorScore;

    public FilterCriteria withInspectorScore(NumberFilter[] inspectorScore) {
        this.inspectorScore = inspectorScore;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionExecutionRoleArn")
    public StringFilter[] lambdaFunctionExecutionRoleArn;

    public FilterCriteria withLambdaFunctionExecutionRoleArn(StringFilter[] lambdaFunctionExecutionRoleArn) {
        this.lambdaFunctionExecutionRoleArn = lambdaFunctionExecutionRoleArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionLastModifiedAt")
    public DateFilter[] lambdaFunctionLastModifiedAt;

    public FilterCriteria withLambdaFunctionLastModifiedAt(DateFilter[] lambdaFunctionLastModifiedAt) {
        this.lambdaFunctionLastModifiedAt = lambdaFunctionLastModifiedAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionLayers")
    public StringFilter[] lambdaFunctionLayers;

    public FilterCriteria withLambdaFunctionLayers(StringFilter[] lambdaFunctionLayers) {
        this.lambdaFunctionLayers = lambdaFunctionLayers;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionName")
    public StringFilter[] lambdaFunctionName;

    public FilterCriteria withLambdaFunctionName(StringFilter[] lambdaFunctionName) {
        this.lambdaFunctionName = lambdaFunctionName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionRuntime")
    public StringFilter[] lambdaFunctionRuntime;

    public FilterCriteria withLambdaFunctionRuntime(StringFilter[] lambdaFunctionRuntime) {
        this.lambdaFunctionRuntime = lambdaFunctionRuntime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastObservedAt")
    public DateFilter[] lastObservedAt;

    public FilterCriteria withLastObservedAt(DateFilter[] lastObservedAt) {
        this.lastObservedAt = lastObservedAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkProtocol")
    public StringFilter[] networkProtocol;

    public FilterCriteria withNetworkProtocol(StringFilter[] networkProtocol) {
        this.networkProtocol = networkProtocol;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portRange")
    public PortRangeFilter[] portRange;

    public FilterCriteria withPortRange(PortRangeFilter[] portRange) {
        this.portRange = portRange;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedVulnerabilities")
    public StringFilter[] relatedVulnerabilities;

    public FilterCriteria withRelatedVulnerabilities(StringFilter[] relatedVulnerabilities) {
        this.relatedVulnerabilities = relatedVulnerabilities;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public StringFilter[] resourceId;

    public FilterCriteria withResourceId(StringFilter[] resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceTags")
    public MapFilter[] resourceTags;

    public FilterCriteria withResourceTags(MapFilter[] resourceTags) {
        this.resourceTags = resourceTags;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public StringFilter[] resourceType;

    public FilterCriteria withResourceType(StringFilter[] resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public StringFilter[] severity;

    public FilterCriteria withSeverity(StringFilter[] severity) {
        this.severity = severity;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public StringFilter[] title;

    public FilterCriteria withTitle(StringFilter[] title) {
        this.title = title;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAt")
    public DateFilter[] updatedAt;

    public FilterCriteria withUpdatedAt(DateFilter[] updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendorSeverity")
    public StringFilter[] vendorSeverity;

    public FilterCriteria withVendorSeverity(StringFilter[] vendorSeverity) {
        this.vendorSeverity = vendorSeverity;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vulnerabilityId")
    public StringFilter[] vulnerabilityId;

    public FilterCriteria withVulnerabilityId(StringFilter[] vulnerabilityId) {
        this.vulnerabilityId = vulnerabilityId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vulnerabilitySource")
    public StringFilter[] vulnerabilitySource;

    public FilterCriteria withVulnerabilitySource(StringFilter[] vulnerabilitySource) {
        this.vulnerabilitySource = vulnerabilitySource;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vulnerablePackages")
    public PackageFilter[] vulnerablePackages;

    public FilterCriteria withVulnerablePackages(PackageFilter[] vulnerablePackages) {
        this.vulnerablePackages = vulnerablePackages;
        return this;
    }
    
    public FilterCriteria(){}
}
