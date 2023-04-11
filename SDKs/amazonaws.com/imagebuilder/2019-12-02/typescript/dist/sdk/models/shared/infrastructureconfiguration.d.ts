import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceMetadataOptions } from "./instancemetadataoptions";
import { Logging } from "./logging";
/**
 * Details of the infrastructure configuration.
 */
export declare class InfrastructureConfiguration extends SpeakeasyBase {
    arn?: string;
    dateCreated?: string;
    dateUpdated?: string;
    description?: string;
    instanceMetadataOptions?: InstanceMetadataOptions;
    instanceProfileName?: string;
    instanceTypes?: string[];
    keyPair?: string;
    logging?: Logging;
    name?: string;
    resourceTags?: Record<string, string>;
    securityGroupIds?: string[];
    snsTopicArn?: string;
    subnetId?: string;
    tags?: Record<string, string>;
    terminateInstanceOnFailure?: boolean;
}
