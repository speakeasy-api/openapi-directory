import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatus } from "./resourcestatus";
import { StatusEnum } from "./statusenum";
/**
 * An Amazon Web Services account within your environment that Amazon Inspector has been enabled for.
 */
export declare class Account extends SpeakeasyBase {
    accountId: string;
    resourceStatus: ResourceStatus;
    status: StatusEnum;
}
