import { SpeakeasyBase } from "../../../internal/utils";
import { DeprecatedStatusEnum } from "./deprecatedstatusenum";
import { ProvisioningTypeEnum } from "./provisioningtypeenum";
import { RegistryTypeEnum } from "./registrytypeenum";
import { TypeFilters } from "./typefilters";
import { VisibilityEnum } from "./visibilityenum";
export declare class ListTypesInput extends SpeakeasyBase {
    deprecatedStatus?: DeprecatedStatusEnum;
    filters?: TypeFilters;
    maxResults?: number;
    nextToken?: string;
    provisioningType?: ProvisioningTypeEnum;
    type?: RegistryTypeEnum;
    visibility?: VisibilityEnum;
}
