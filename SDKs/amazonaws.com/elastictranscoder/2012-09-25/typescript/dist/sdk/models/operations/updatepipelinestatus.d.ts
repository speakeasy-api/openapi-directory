import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePipelineStatusRequestBody extends SpeakeasyBase {
    /**
     * <p>The desired status of the pipeline:</p> <ul> <li> <p> <code>Active</code>: The pipeline is processing jobs.</p> </li> <li> <p> <code>Paused</code>: The pipeline is not currently processing jobs.</p> </li> </ul>
     */
    status: string;
}
export declare class UpdatePipelineStatusRequest extends SpeakeasyBase {
    /**
     * The identifier of the pipeline to update.
     */
    id: string;
    requestBody: UpdatePipelineStatusRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdatePipelineStatusResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * IncompatibleVersionException
     */
    incompatibleVersionException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updatePipelineStatusResponse?: shared.UpdatePipelineStatusResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
