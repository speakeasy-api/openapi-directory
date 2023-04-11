import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";
export declare class StartFHIRImportJobRequest extends SpeakeasyBase {
    clientToken: string;
    dataAccessRoleArn: string;
    datastoreId: string;
    inputDataConfig: InputDataConfig;
    jobName?: string;
    /**
     * The output data configuration that was supplied when the export job was created.
     */
    jobOutputDataConfig: OutputDataConfig;
}
