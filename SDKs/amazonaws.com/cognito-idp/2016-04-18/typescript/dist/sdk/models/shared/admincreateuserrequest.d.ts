import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeType } from "./attributetype";
import { DeliveryMediumTypeEnum } from "./deliverymediumtypeenum";
import { MessageActionTypeEnum } from "./messageactiontypeenum";
/**
 * Represents the request to create a user in the specified user pool.
 */
export declare class AdminCreateUserRequest extends SpeakeasyBase {
    clientMetadata?: Record<string, string>;
    desiredDeliveryMediums?: DeliveryMediumTypeEnum[];
    forceAliasCreation?: boolean;
    messageAction?: MessageActionTypeEnum;
    temporaryPassword?: string;
    userAttributes?: AttributeType[];
    userPoolId: string;
    username: string;
    validationData?: AttributeType[];
}
