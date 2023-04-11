import { SpeakeasyBase } from "../../../internal/utils";
import { SecretVersionsListEntry } from "./secretversionslistentry";
/**
 * Success
 */
export declare class ListSecretVersionIdsResponse extends SpeakeasyBase {
    arn?: string;
    name?: string;
    nextToken?: string;
    versions?: SecretVersionsListEntry[];
}
