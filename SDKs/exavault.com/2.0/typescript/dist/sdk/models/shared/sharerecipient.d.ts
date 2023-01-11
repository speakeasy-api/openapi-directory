import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ShareRecipientTypeEnum {
    Owner = "owner",
    Direct = "direct"
}
export declare class ShareRecipient extends SpeakeasyBase {
    created?: Date;
    email?: string;
    hash?: string;
    id?: number;
    received?: boolean;
    sent?: boolean;
    shareId?: string;
    type?: ShareRecipientTypeEnum;
}
