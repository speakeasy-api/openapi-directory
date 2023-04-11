import { SpeakeasyBase } from "../../../internal/utils";
import { ActionConfiguration } from "./actionconfiguration";
import { ActionTypeId } from "./actiontypeid";
import { Artifact } from "./artifact";
import { AWSSessionCredentials } from "./awssessioncredentials";
import { EncryptionKey } from "./encryptionkey";
import { PipelineContext } from "./pipelinecontext";
/**
 * Represents information about the job data for a partner action.
 */
export declare class ThirdPartyJobData extends SpeakeasyBase {
    actionConfiguration?: ActionConfiguration;
    actionTypeId?: ActionTypeId;
    artifactCredentials?: AWSSessionCredentials;
    continuationToken?: string;
    encryptionKey?: EncryptionKey;
    inputArtifacts?: Artifact[];
    outputArtifacts?: Artifact[];
    pipelineContext?: PipelineContext;
}
