import { SpeakeasyBase } from "../../../internal/utils";
import { DeprecatedStatusEnum } from "./deprecatedstatusenum";
import { RegistryTypeEnum } from "./registrytypeenum";
export declare class ListTypeVersionsInput extends SpeakeasyBase {
    arn?: string;
    deprecatedStatus?: DeprecatedStatusEnum;
    maxResults?: number;
    nextToken?: string;
    publisherId?: string;
    type?: RegistryTypeEnum;
    typeName?: string;
}
