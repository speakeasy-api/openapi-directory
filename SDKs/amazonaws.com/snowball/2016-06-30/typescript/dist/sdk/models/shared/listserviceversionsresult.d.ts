import { SpeakeasyBase } from "../../../internal/utils";
import { DependentService } from "./dependentservice";
import { ServiceNameEnum } from "./servicenameenum";
import { ServiceVersion } from "./serviceversion";
/**
 * Success
 */
export declare class ListServiceVersionsResult extends SpeakeasyBase {
    dependentServices?: DependentService[];
    nextToken?: string;
    serviceName: ServiceNameEnum;
    serviceVersions: ServiceVersion[];
}
