import { SpeakeasyBase } from "../../../internal/utils";
import { JobTemplateData } from "./jobtemplatedata";
/**
 * This entity describes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
 */
export declare class JobTemplate extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    createdBy?: string;
    decryptionError?: string;
    id?: string;
    jobTemplateData: JobTemplateData;
    kmsKeyArn?: string;
    name?: string;
    tags?: Record<string, string>;
}
