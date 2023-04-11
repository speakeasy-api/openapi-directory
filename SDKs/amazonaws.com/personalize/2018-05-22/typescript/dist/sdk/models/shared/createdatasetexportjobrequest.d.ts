import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetExportJobOutput } from "./datasetexportjoboutput";
import { IngestionModeEnum } from "./ingestionmodeenum";
import { Tag } from "./tag";
export declare class CreateDatasetExportJobRequest extends SpeakeasyBase {
    datasetArn: string;
    ingestionMode?: IngestionModeEnum;
    jobName: string;
    jobOutput: DatasetExportJobOutput;
    roleArn: string;
    tags?: Tag[];
}
