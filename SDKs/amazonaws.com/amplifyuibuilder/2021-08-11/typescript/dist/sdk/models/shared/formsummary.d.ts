import { SpeakeasyBase } from "../../../internal/utils";
import { FormActionTypeEnum } from "./formactiontypeenum";
import { FormDataTypeConfig } from "./formdatatypeconfig";
/**
 * Describes the basic information about a form.
 */
export declare class FormSummary extends SpeakeasyBase {
    appId: string;
    dataType: FormDataTypeConfig;
    environmentName: string;
    formActionType: FormActionTypeEnum;
    id: string;
    name: string;
}
