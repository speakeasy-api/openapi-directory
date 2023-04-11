import { SpeakeasyBase } from "../../../internal/utils";
import { SensitivityInspectionTemplateExcludes } from "./sensitivityinspectiontemplateexcludes";
import { SensitivityInspectionTemplateIncludes } from "./sensitivityinspectiontemplateincludes";
/**
 * Success
 */
export declare class GetSensitivityInspectionTemplateResponse extends SpeakeasyBase {
    description?: string;
    excludes?: SensitivityInspectionTemplateExcludes;
    includes?: SensitivityInspectionTemplateIncludes;
    name?: string;
    sensitivityInspectionTemplateId?: string;
}
