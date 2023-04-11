import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A user access logging settings resource that can be associated with a web portal.
 */
export declare class UserAccessLoggingSettings extends SpeakeasyBase {
    associatedPortalArns?: string[];
    kinesisStreamArn?: string;
    userAccessLoggingSettingsArn: string;
}
