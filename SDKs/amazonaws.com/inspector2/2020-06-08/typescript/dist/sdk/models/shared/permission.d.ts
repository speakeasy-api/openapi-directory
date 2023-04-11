import { SpeakeasyBase } from "../../../internal/utils";
import { OperationEnum } from "./operationenum";
import { ServiceEnum } from "./serviceenum";
/**
 * Contains information on the permissions an account has within Amazon Inspector.
 */
export declare class Permission extends SpeakeasyBase {
    operation: OperationEnum;
    service: ServiceEnum;
}
