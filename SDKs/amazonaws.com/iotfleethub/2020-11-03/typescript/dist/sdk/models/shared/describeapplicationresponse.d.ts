import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStateEnum } from "./applicationstateenum";
/**
 * Success
 */
export declare class DescribeApplicationResponse extends SpeakeasyBase {
    applicationArn: string;
    applicationCreationDate: number;
    applicationDescription?: string;
    applicationId: string;
    applicationLastUpdateDate: number;
    applicationName: string;
    applicationState: ApplicationStateEnum;
    applicationUrl: string;
    errorMessage?: string;
    roleArn: string;
    ssoClientId?: string;
    tags?: Record<string, string>;
}
