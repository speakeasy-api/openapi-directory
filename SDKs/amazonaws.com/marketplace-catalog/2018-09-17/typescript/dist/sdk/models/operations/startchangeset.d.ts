import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartChangeSetRequestBody extends SpeakeasyBase {
    /**
     * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
     */
    catalog: string;
    /**
     * Array of <code>change</code> object.
     */
    changeSet: shared.Change[];
    /**
     * Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets.
     */
    changeSetName?: string;
    /**
     * A list of objects specifying each key name and value for the <code>ChangeSetTags</code> property.
     */
    changeSetTags?: shared.Tag[];
    /**
     * A unique token to identify the request to ensure idempotency.
     */
    clientRequestToken?: string;
}
export declare class StartChangeSetRequest extends SpeakeasyBase {
    requestBody: StartChangeSetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartChangeSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startChangeSetResponse?: shared.StartChangeSetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
