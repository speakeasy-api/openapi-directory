import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteContinuousDeploymentPolicy20200531Request extends SpeakeasyBase {
    /**
     * The identifier of the continuous deployment policy that you are deleting.
     */
    id: string;
    /**
     * The current version (<code>ETag</code> value) of the continuous deployment policy that you are deleting.
     */
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteContinuousDeploymentPolicy20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
