import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccessTypeEnum } from "./environmentaccesstypeenum";
export declare class EnvironmentAccessModel extends SpeakeasyBase {
    color?: string;
    description?: string;
    environmentAccessType?: EnvironmentAccessTypeEnum;
    environmentId?: string;
    name?: string;
    order?: number;
    reasonRequired?: boolean;
}
