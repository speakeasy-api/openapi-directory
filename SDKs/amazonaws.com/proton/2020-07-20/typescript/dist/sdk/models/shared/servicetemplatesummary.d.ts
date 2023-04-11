import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningEnum } from "./provisioningenum";
/**
 * Summary data of an Proton service template resource.
 */
export declare class ServiceTemplateSummary extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    description?: string;
    displayName?: string;
    lastModifiedAt: Date;
    name: string;
    pipelineProvisioning?: ProvisioningEnum;
    recommendedVersion?: string;
}
