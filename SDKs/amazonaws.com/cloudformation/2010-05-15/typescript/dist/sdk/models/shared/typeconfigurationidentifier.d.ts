import { SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyTypeEnum } from "./thirdpartytypeenum";
/**
 * Identifying information for the configuration of a CloudFormation extension.
 */
export declare class TypeConfigurationIdentifier extends SpeakeasyBase {
    type?: ThirdPartyTypeEnum;
    typeArn?: string;
    typeConfigurationAlias?: string;
    typeConfigurationArn?: string;
    typeName?: string;
}
