import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseShortInfoResponse } from "./databaseshortinforesponse";
import { SchemaShortInfoResponse } from "./schemashortinforesponse";
import { ServerShortInfoResponse } from "./servershortinforesponse";
/**
 * Describes a schema in a Fleet Advisor collector inventory.
 */
export declare class SchemaResponse extends SpeakeasyBase {
    codeLineCount?: number;
    codeSize?: number;
    complexity?: string;
    databaseInstance?: DatabaseShortInfoResponse;
    /**
     * Describes a schema in a Fleet Advisor collector inventory.
     */
    originalSchema?: SchemaShortInfoResponse;
    schemaId?: string;
    schemaName?: string;
    server?: ServerShortInfoResponse;
    similarity?: number;
}
