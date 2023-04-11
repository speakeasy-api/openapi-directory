import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceNameEnum } from "./servicenameenum";
import { ServiceVersion } from "./serviceversion";
/**
 * The name and version of the service dependant on the requested service.
 */
export declare class DependentService extends SpeakeasyBase {
    serviceName?: ServiceNameEnum;
    serviceVersion?: ServiceVersion;
}
