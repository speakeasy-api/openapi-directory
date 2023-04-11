import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The result structure for the create a new deployment request.
 */
export declare class CreateDeploymentResult extends SpeakeasyBase {
    fileUploadUrls: Record<string, string>;
    jobId?: string;
    zipUploadUrl: string;
}
