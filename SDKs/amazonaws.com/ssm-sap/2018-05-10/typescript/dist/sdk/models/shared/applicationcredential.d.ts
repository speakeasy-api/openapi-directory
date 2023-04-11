import { SpeakeasyBase } from "../../../internal/utils";
import { CredentialTypeEnum } from "./credentialtypeenum";
/**
 * The credentials of your SAP application.
 */
export declare class ApplicationCredential extends SpeakeasyBase {
    credentialType: CredentialTypeEnum;
    databaseName: string;
    secretId: string;
}
