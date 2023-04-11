import { SpeakeasyBase } from "../../../internal/utils";
import { PayerResponsibilityEnum } from "./payerresponsibilityenum";
export declare class ModifyVpcEndpointServicePayerResponsibilityRequest extends SpeakeasyBase {
    dryRun?: boolean;
    payerResponsibility: PayerResponsibilityEnum;
    serviceId: string;
}
