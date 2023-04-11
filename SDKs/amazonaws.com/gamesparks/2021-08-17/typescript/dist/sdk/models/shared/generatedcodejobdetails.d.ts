import { SpeakeasyBase } from "../../../internal/utils";
import { GeneratedCodeJobStateEnum } from "./generatedcodejobstateenum";
/**
 * Details about a generated code job.
 */
export declare class GeneratedCodeJobDetails extends SpeakeasyBase {
    description?: string;
    expirationTime?: Date;
    generatedCodeJobId?: string;
    s3Url?: string;
    status?: GeneratedCodeJobStateEnum;
}
