import { SpeakeasyBase } from "../../../internal/utils";
import { EarthObservationJobErrorDetails } from "./earthobservationjoberrordetails";
import { EarthObservationJobExportStatusEnum } from "./earthobservationjobexportstatusenum";
import { EarthObservationJobStatusEnum } from "./earthobservationjobstatusenum";
import { ExportErrorDetails } from "./exporterrordetails";
import { InputConfigOutput } from "./inputconfigoutput";
import { JobConfigInput } from "./jobconfiginput";
import { OutputBand } from "./outputband";
/**
 * Success
 */
export declare class GetEarthObservationJobOutput extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    durationInSeconds: number;
    errorDetails?: EarthObservationJobErrorDetails;
    executionRoleArn?: string;
    exportErrorDetails?: ExportErrorDetails;
    exportStatus?: EarthObservationJobExportStatusEnum;
    inputConfig: InputConfigOutput;
    jobConfig: JobConfigInput;
    kmsKeyId?: string;
    name: string;
    outputBands?: OutputBand[];
    status: EarthObservationJobStatusEnum;
    tags?: Record<string, string>;
}
