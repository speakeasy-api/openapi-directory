import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceRegionScopeEnum } from "./resourceregionscopeenum";
import { ResourceStatusEnum } from "./resourcestatusenum";
/**
 * Describes a resource associated with a resource share in RAM.
 */
export declare class Resource extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    lastUpdatedTime?: Date;
    resourceGroupArn?: string;
    resourceRegionScope?: ResourceRegionScopeEnum;
    resourceShareArn?: string;
    status?: ResourceStatusEnum;
    statusMessage?: string;
    type?: string;
}
