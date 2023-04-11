import { SpeakeasyBase } from "../../../internal/utils";
import { DateFilter } from "./datefilter";
import { MapFilter } from "./mapfilter";
import { NumberFilter } from "./numberfilter";
import { PackageFilter } from "./packagefilter";
import { PortRangeFilter } from "./portrangefilter";
import { StringFilter } from "./stringfilter";
/**
 * Details on the criteria used to define the filter.
 */
export declare class FilterCriteria extends SpeakeasyBase {
    awsAccountId?: StringFilter[];
    componentId?: StringFilter[];
    componentType?: StringFilter[];
    ec2InstanceImageId?: StringFilter[];
    ec2InstanceSubnetId?: StringFilter[];
    ec2InstanceVpcId?: StringFilter[];
    ecrImageArchitecture?: StringFilter[];
    ecrImageHash?: StringFilter[];
    ecrImagePushedAt?: DateFilter[];
    ecrImageRegistry?: StringFilter[];
    ecrImageRepositoryName?: StringFilter[];
    ecrImageTags?: StringFilter[];
    exploitAvailable?: StringFilter[];
    findingArn?: StringFilter[];
    findingStatus?: StringFilter[];
    findingType?: StringFilter[];
    firstObservedAt?: DateFilter[];
    fixAvailable?: StringFilter[];
    inspectorScore?: NumberFilter[];
    lambdaFunctionExecutionRoleArn?: StringFilter[];
    lambdaFunctionLastModifiedAt?: DateFilter[];
    lambdaFunctionLayers?: StringFilter[];
    lambdaFunctionName?: StringFilter[];
    lambdaFunctionRuntime?: StringFilter[];
    lastObservedAt?: DateFilter[];
    networkProtocol?: StringFilter[];
    portRange?: PortRangeFilter[];
    relatedVulnerabilities?: StringFilter[];
    resourceId?: StringFilter[];
    resourceTags?: MapFilter[];
    resourceType?: StringFilter[];
    severity?: StringFilter[];
    title?: StringFilter[];
    updatedAt?: DateFilter[];
    vendorSeverity?: StringFilter[];
    vulnerabilityId?: StringFilter[];
    vulnerabilitySource?: StringFilter[];
    vulnerablePackages?: PackageFilter[];
}
