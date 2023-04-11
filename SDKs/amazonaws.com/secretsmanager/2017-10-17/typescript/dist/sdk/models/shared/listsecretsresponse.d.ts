import { SpeakeasyBase } from "../../../internal/utils";
import { SecretListEntry } from "./secretlistentry";
/**
 * Success
 */
export declare class ListSecretsResponse extends SpeakeasyBase {
    nextToken?: string;
    secretList?: SecretListEntry[];
}
