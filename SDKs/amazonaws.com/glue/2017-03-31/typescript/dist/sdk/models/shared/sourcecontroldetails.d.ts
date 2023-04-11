import { SpeakeasyBase } from "../../../internal/utils";
import { SourceControlAuthStrategyEnum } from "./sourcecontrolauthstrategyenum";
import { SourceControlProviderEnum } from "./sourcecontrolproviderenum";
/**
 * The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.
 */
export declare class SourceControlDetails extends SpeakeasyBase {
    authStrategy?: SourceControlAuthStrategyEnum;
    authToken?: string;
    branch?: string;
    folder?: string;
    lastCommitId?: string;
    owner?: string;
    provider?: SourceControlProviderEnum;
    repository?: string;
}
