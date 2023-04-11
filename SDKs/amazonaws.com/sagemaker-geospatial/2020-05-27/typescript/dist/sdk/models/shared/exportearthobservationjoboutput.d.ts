import { SpeakeasyBase } from "../../../internal/utils";
import { EarthObservationJobExportStatusEnum } from "./earthobservationjobexportstatusenum";
import { OutputConfigInput } from "./outputconfiginput";
/**
 * Success
 */
export declare class ExportEarthObservationJobOutput extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    executionRoleArn: string;
    exportSourceImages?: boolean;
    exportStatus: EarthObservationJobExportStatusEnum;
    outputConfig: OutputConfigInput;
}
