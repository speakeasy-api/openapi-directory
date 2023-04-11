import { SpeakeasyBase } from "../../../internal/utils";
import { ActionConfiguration } from "./actionconfiguration";
import { ActionTypeId } from "./actiontypeid";
import { Artifact } from "./artifact";
import { AWSSessionCredentials } from "./awssessioncredentials";
import { EncryptionKey } from "./encryptionkey";
import { PipelineContext } from "./pipelinecontext";
/**
 * Represents other information about a job required for a job worker to complete the job.
 */
export declare class JobData extends SpeakeasyBase {
    actionConfiguration?: ActionConfiguration;
    actionTypeId?: ActionTypeId;
    artifactCredentials?: AWSSessionCredentials;
    continuationToken?: string;
    encryptionKey?: EncryptionKey;
    inputArtifacts?: Artifact[];
    outputArtifacts?: Artifact[];
    pipelineContext?: PipelineContext;
}
