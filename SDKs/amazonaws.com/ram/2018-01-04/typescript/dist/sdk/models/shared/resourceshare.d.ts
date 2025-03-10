import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareFeatureSetEnum } from "./resourcesharefeaturesetenum";
import { ResourceShareStatusEnum } from "./resourcesharestatusenum";
import { Tag } from "./tag";
/**
 * Describes a resource share in RAM.
 */
export declare class ResourceShare extends SpeakeasyBase {
    allowExternalPrincipals?: boolean;
    creationTime?: Date;
    featureSet?: ResourceShareFeatureSetEnum;
    lastUpdatedTime?: Date;
    name?: string;
    owningAccountId?: string;
    resourceShareArn?: string;
    status?: ResourceShareStatusEnum;
    statusMessage?: string;
    tags?: Tag[];
}
