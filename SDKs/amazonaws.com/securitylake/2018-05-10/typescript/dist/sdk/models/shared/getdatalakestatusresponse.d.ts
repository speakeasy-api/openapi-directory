import { SpeakeasyBase } from "../../../internal/utils";
import { AccountSources } from "./accountsources";
/**
 * Success
 */
export declare class GetDatalakeStatusResponse extends SpeakeasyBase {
    accountSourcesList: AccountSources[];
    nextToken?: string;
}
