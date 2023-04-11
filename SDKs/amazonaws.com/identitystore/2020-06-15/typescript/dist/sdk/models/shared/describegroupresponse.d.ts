import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalId } from "./externalid";
/**
 * Success
 */
export declare class DescribeGroupResponse extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    externalIds?: ExternalId[];
    groupId: string;
    identityStoreId: string;
}
