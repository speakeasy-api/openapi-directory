import { SpeakeasyBase } from "../../../internal/utils";
import { SensitivityInspectionTemplatesEntry } from "./sensitivityinspectiontemplatesentry";
/**
 * Success
 */
export declare class ListSensitivityInspectionTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    sensitivityInspectionTemplates?: SensitivityInspectionTemplatesEntry[];
}
