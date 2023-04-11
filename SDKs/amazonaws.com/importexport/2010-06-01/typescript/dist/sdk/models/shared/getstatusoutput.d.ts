import { SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
import { JobTypeEnum } from "./jobtypeenum";
/**
 * Output structure for the GetStatus operation.
 */
export declare class GetStatusOutput extends SpeakeasyBase {
    /**
     * A collection of artifacts.
     */
    artifactList?: Artifact[];
    /**
     * Name of the shipping company. This value is included when the LocationCode is "Returned".
     */
    carrier?: string;
    /**
     * Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z".
     */
    creationDate?: Date;
    /**
     * The last manifest submitted, which will be used to process the job.
     */
    currentManifest?: string;
    /**
     * Number of errors. We return this value when the ProgressCode is Success or SuccessWithErrors.
     */
    errorCount?: number;
    /**
     * A unique identifier which refers to a particular job.
     */
    jobId?: string;
    /**
     * Specifies whether the job to initiate is an import or export job.
     */
    jobType?: JobTypeEnum;
    /**
     * A token representing the location of the storage device, such as "AtAWS".
     */
    locationCode?: string;
    /**
     * A more human readable form of the physical location of the storage device.
     */
    locationMessage?: string;
    /**
     * Amazon S3 bucket for user logs.
     */
    logBucket?: string;
    /**
     * The key where the user logs were stored.
     */
    logKey?: string;
    /**
     * A token representing the state of the job, such as "Started".
     */
    progressCode?: string;
    /**
     * A more human readable form of the job status.
     */
    progressMessage?: string;
    /**
     * An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value.
     */
    signature?: string;
    /**
     * An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value.
     */
    signatureFileContents?: string;
    /**
     * The shipping tracking number assigned by AWS Import/Export to the storage device when it's returned to you. We return this value when the LocationCode is "Returned".
     */
    trackingNumber?: string;
}
