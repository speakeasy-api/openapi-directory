import { SpeakeasyBase } from "../../../internal/utils";
import { DependentService } from "./dependentservice";
import { ServiceNameEnum } from "./servicenameenum";
export declare class ListServiceVersionsRequest extends SpeakeasyBase {
    dependentServices?: DependentService[];
    maxResults?: number;
    nextToken?: string;
    serviceName: ServiceNameEnum;
}
