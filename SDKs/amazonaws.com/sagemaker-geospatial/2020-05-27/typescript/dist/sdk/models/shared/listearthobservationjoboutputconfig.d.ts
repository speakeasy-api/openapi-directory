import { SpeakeasyBase } from "../../../internal/utils";
import { EarthObservationJobStatusEnum } from "./earthobservationjobstatusenum";
/**
 * An object containing information about the output file.
 */
export declare class ListEarthObservationJobOutputConfig extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    durationInSeconds: number;
    name: string;
    operationType: string;
    status: EarthObservationJobStatusEnum;
    tags?: Record<string, string>;
}
