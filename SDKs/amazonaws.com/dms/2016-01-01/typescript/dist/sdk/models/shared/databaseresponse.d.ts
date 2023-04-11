import { SpeakeasyBase } from "../../../internal/utils";
import { CollectorShortInfoResponse } from "./collectorshortinforesponse";
import { DatabaseInstanceSoftwareDetailsResponse } from "./databaseinstancesoftwaredetailsresponse";
import { ServerShortInfoResponse } from "./servershortinforesponse";
/**
 * Describes a database in a Fleet Advisor collector inventory.
 */
export declare class DatabaseResponse extends SpeakeasyBase {
    collectors?: CollectorShortInfoResponse[];
    databaseId?: string;
    databaseName?: string;
    ipAddress?: string;
    numberOfSchemas?: number;
    server?: ServerShortInfoResponse;
    softwareDetails?: DatabaseInstanceSoftwareDetailsResponse;
}
