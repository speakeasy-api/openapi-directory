import { SpeakeasyBase } from "../../../internal/utils";
import { VerifiedAccessLogOptions } from "./verifiedaccesslogoptions";
export declare class ModifyVerifiedAccessInstanceLoggingConfigurationRequest extends SpeakeasyBase {
    accessLogs: VerifiedAccessLogOptions;
    clientToken?: string;
    dryRun?: boolean;
    verifiedAccessInstanceId: string;
}
