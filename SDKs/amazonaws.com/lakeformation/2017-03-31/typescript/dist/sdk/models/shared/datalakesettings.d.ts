import { SpeakeasyBase } from "../../../internal/utils";
import { DataLakePrincipal } from "./datalakeprincipal";
import { PrincipalPermissions } from "./principalpermissions";
/**
 * A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
 */
export declare class DataLakeSettings extends SpeakeasyBase {
    allowExternalDataFiltering?: boolean;
    authorizedSessionTagValueList?: string[];
    createDatabaseDefaultPermissions?: PrincipalPermissions[];
    createTableDefaultPermissions?: PrincipalPermissions[];
    dataLakeAdmins?: DataLakePrincipal[];
    externalDataFilteringAllowList?: DataLakePrincipal[];
    parameters?: Record<string, string>;
    trustedResourceOwners?: string[];
}
