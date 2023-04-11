import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class GetCredentialsResponse extends SpeakeasyBase {
    dbPassword?: string;
    dbUser?: string;
    expiration?: Date;
    nextRefreshTime?: Date;
}
