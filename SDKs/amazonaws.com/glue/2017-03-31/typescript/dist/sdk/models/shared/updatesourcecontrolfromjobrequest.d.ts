import { SpeakeasyBase } from "../../../internal/utils";
import { SourceControlAuthStrategyEnum } from "./sourcecontrolauthstrategyenum";
import { SourceControlProviderEnum } from "./sourcecontrolproviderenum";
export declare class UpdateSourceControlFromJobRequest extends SpeakeasyBase {
    authStrategy?: SourceControlAuthStrategyEnum;
    authToken?: string;
    branchName?: string;
    commitId?: string;
    folder?: string;
    jobName?: string;
    provider?: SourceControlProviderEnum;
    repositoryName?: string;
    repositoryOwner?: string;
}
