import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MessageLevelEnum {
    Confidential = "confidential",
    Regular = "regular"
}
export declare class Message extends SpeakeasyBase {
    author?: string;
    id?: string;
    level?: MessageLevelEnum;
    messageDate?: string;
    modificationAuthor?: string;
    modificationDate?: string;
    text?: string;
}
