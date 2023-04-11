import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a single user.
 */
export declare class UserInfo extends SpeakeasyBase {
    admin?: boolean;
    developer?: boolean;
    displayName?: string;
    username?: string;
    viewer?: boolean;
}
