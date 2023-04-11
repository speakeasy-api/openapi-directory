import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAssociationsListElement } from "./accountassociationslistelement";
/**
 * Success
 */
export declare class ListAccountAssociationsOutput extends SpeakeasyBase {
    linkedAccounts?: AccountAssociationsListElement[];
    nextToken?: string;
}
