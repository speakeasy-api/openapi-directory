import { SpeakeasyBase } from "../../../internal/utils";
import { ShippingLabelStatusEnum } from "./shippinglabelstatusenum";
/**
 * Success
 */
export declare class DescribeReturnShippingLabelResult extends SpeakeasyBase {
    expirationDate?: Date;
    returnShippingLabelURI?: string;
    status?: ShippingLabelStatusEnum;
}
