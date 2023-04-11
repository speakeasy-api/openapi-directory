import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePhoneNumberRequest extends SpeakeasyBase {
    deletionProtectionEnabled?: boolean;
    optOutListName?: string;
    phoneNumberId: string;
    selfManagedOptOutsEnabled?: boolean;
    twoWayChannelArn?: string;
    twoWayEnabled?: boolean;
}
