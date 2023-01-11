import { SpeakeasyBase } from "../../../internal/utils";
export declare class SessionActivityEntryAttributes extends SpeakeasyBase {
    bytesTransferred?: number;
    created?: string;
    duration?: number;
    fileName?: string;
    fileSource?: string;
    ipAddress?: string;
    operation?: string;
    protocol?: string;
    sessionId?: string;
    status?: string;
    username?: string;
}
export declare enum SessionActivityEntryTypeEnum {
    SessionActivity = "sessionActivity"
}
/**
 * Single entry of session activity
**/
export declare class SessionActivityEntry extends SpeakeasyBase {
    attributes?: SessionActivityEntryAttributes;
    id?: number;
    type?: SessionActivityEntryTypeEnum;
}
