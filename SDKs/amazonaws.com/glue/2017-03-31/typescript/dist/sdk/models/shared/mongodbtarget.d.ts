import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an Amazon DocumentDB or MongoDB data store to crawl.
 */
export declare class MongoDBTarget extends SpeakeasyBase {
    connectionName?: string;
    path?: string;
    scanAll?: boolean;
}
