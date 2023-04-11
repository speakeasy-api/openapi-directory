import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputDataConfig } from "./outputdataconfig";
export declare class StartSNOMEDCTInferenceJobRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    dataAccessRoleArn: string;
    /**
     * The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed.
     */
    inputDataConfig: InputDataConfig;
    jobName?: string;
    kmsKey?: string;
    languageCode: LanguageCodeEnum;
    /**
     * The output properties for a detection job.
     */
    outputDataConfig: OutputDataConfig;
}
