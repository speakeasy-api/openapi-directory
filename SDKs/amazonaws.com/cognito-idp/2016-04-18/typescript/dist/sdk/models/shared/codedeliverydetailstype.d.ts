import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryMediumTypeEnum } from "./deliverymediumtypeenum";
/**
 * The delivery details for an email or SMS message that Amazon Cognito sent for authentication or verification.
 */
export declare class CodeDeliveryDetailsType extends SpeakeasyBase {
    attributeName?: string;
    deliveryMedium?: DeliveryMediumTypeEnum;
    destination?: string;
}
