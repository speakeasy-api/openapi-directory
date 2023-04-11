import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseIdentifier } from "./databaseidentifier";
import { PrincipalPermissions } from "./principalpermissions";
/**
 * The structure used to create or update a database.
 */
export declare class DatabaseInput extends SpeakeasyBase {
    createTableDefaultPermissions?: PrincipalPermissions[];
    description?: string;
    locationUri?: string;
    name: string;
    parameters?: Record<string, string>;
    targetDatabase?: DatabaseIdentifier;
}
