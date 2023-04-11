import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardExportOutputConfig } from "./modelcardexportoutputconfig";
export declare class CreateModelCardExportJobRequest extends SpeakeasyBase {
    modelCardExportJobName: string;
    modelCardName: string;
    modelCardVersion?: number;
    outputConfig: ModelCardExportOutputConfig;
}
