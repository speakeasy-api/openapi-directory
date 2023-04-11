import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceTypeEnum } from "./servicetypeenum";
export declare class GetResourceMetadataRequest extends SpeakeasyBase {
    identifier: string;
    serviceType: ServiceTypeEnum;
}
