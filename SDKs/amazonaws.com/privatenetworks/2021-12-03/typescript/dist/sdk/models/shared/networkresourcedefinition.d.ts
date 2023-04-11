import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
import { NetworkResourceDefinitionTypeEnum } from "./networkresourcedefinitiontypeenum";
/**
 * Information about a network resource definition.
 */
export declare class NetworkResourceDefinition extends SpeakeasyBase {
    count: number;
    options?: NameValuePair[];
    type: NetworkResourceDefinitionTypeEnum;
}
