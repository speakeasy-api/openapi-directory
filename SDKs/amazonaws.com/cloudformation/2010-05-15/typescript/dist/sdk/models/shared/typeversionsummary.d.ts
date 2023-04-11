import { SpeakeasyBase } from "../../../internal/utils";
import { RegistryTypeEnum } from "./registrytypeenum";
/**
 * Contains summary information about a specific version of a CloudFormation extension.
 */
export declare class TypeVersionSummary extends SpeakeasyBase {
    arn?: string;
    description?: string;
    isDefaultVersion?: boolean;
    publicVersionNumber?: string;
    timeCreated?: Date;
    type?: RegistryTypeEnum;
    typeName?: string;
    versionId?: string;
}
