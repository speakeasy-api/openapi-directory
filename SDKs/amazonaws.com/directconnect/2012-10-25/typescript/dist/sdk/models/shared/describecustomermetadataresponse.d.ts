import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerAgreement } from "./customeragreement";
import { NniPartnerTypeEnum } from "./nnipartnertypeenum";
/**
 * Success
 */
export declare class DescribeCustomerMetadataResponse extends SpeakeasyBase {
    agreements?: CustomerAgreement[];
    nniPartnerType?: NniPartnerTypeEnum;
}
