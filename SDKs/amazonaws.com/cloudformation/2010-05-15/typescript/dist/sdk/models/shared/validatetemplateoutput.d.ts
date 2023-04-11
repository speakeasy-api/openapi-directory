import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilityEnum } from "./capabilityenum";
import { TemplateParameter } from "./templateparameter";
/**
 * The output for <a>ValidateTemplate</a> action.
 */
export declare class ValidateTemplateOutput extends SpeakeasyBase {
    capabilities?: CapabilityEnum[];
    capabilitiesReason?: string;
    declaredTransforms?: string[];
    description?: string;
    parameters?: TemplateParameter[];
}
