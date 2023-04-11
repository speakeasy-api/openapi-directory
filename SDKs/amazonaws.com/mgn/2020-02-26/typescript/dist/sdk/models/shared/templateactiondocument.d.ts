import { SpeakeasyBase } from "../../../internal/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";
import { SsmExternalParameter } from "./ssmexternalparameter";
import { SsmParameterStoreParameter } from "./ssmparameterstoreparameter";
/**
 * Success
 */
export declare class TemplateActionDocument extends SpeakeasyBase {
    actionID?: string;
    actionName?: string;
    active?: boolean;
    category?: ActionCategoryEnum;
    description?: string;
    documentIdentifier?: string;
    documentVersion?: string;
    externalParameters?: Record<string, SsmExternalParameter>;
    mustSucceedForCutover?: boolean;
    operatingSystem?: string;
    order?: number;
    parameters?: Record<string, SsmParameterStoreParameter[]>;
    timeoutSeconds?: number;
}
