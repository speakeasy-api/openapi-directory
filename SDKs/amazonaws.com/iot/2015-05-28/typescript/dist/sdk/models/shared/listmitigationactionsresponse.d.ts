import { SpeakeasyBase } from "../../../internal/utils";
import { MitigationActionIdentifier } from "./mitigationactionidentifier";
/**
 * Success
 */
export declare class ListMitigationActionsResponse extends SpeakeasyBase {
    actionIdentifiers?: MitigationActionIdentifier[];
    nextToken?: string;
}
