import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DependabotRemoveSelectedRepoFromOrgSecretRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    repositoryId: number;
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class DependabotRemoveSelectedRepoFromOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
