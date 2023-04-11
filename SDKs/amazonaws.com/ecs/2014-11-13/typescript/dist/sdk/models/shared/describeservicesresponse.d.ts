import { SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { Service } from "./service";
/**
 * Success
 */
export declare class DescribeServicesResponse extends SpeakeasyBase {
    failures?: Failure[];
    services?: Service[];
}
