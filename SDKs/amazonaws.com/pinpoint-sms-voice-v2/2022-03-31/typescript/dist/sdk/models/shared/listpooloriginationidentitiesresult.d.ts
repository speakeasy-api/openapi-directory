import { SpeakeasyBase } from "../../../internal/utils";
import { OriginationIdentityMetadata } from "./originationidentitymetadata";
/**
 * Success
 */
export declare class ListPoolOriginationIdentitiesResult extends SpeakeasyBase {
    nextToken?: string;
    originationIdentities?: OriginationIdentityMetadata[];
    poolArn?: string;
    poolId?: string;
}
