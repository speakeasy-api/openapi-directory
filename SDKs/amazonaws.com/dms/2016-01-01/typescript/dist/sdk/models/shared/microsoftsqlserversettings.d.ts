import { SpeakeasyBase } from "../../../internal/utils";
import { SafeguardPolicyEnum } from "./safeguardpolicyenum";
import { TlogAccessModeEnum } from "./tlogaccessmodeenum";
/**
 * Provides information that defines a Microsoft SQL Server endpoint.
 */
export declare class MicrosoftSQLServerSettings extends SpeakeasyBase {
    bcpPacketSize?: number;
    controlTablesFileGroup?: string;
    databaseName?: string;
    forceLobLookup?: boolean;
    password?: string;
    port?: number;
    querySingleAlwaysOnNode?: boolean;
    readBackupOnly?: boolean;
    safeguardPolicy?: SafeguardPolicyEnum;
    secretsManagerAccessRoleArn?: string;
    secretsManagerSecretId?: string;
    serverName?: string;
    tlogAccessMode?: TlogAccessModeEnum;
    trimSpaceInChar?: boolean;
    useBcpFullLoad?: boolean;
    useThirdPartyBackupDevice?: boolean;
    username?: string;
}
