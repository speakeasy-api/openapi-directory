import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Details about what caused the incident to be created in Incident Manager.
 */
export declare class StartIncidentRequestBodyTriggerDetails extends SpeakeasyBase {
    rawData?: string;
    source?: string;
    timestamp?: Date;
    triggerArn?: string;
}
export declare class StartIncidentRequestBody extends SpeakeasyBase {
    /**
     * A token ensuring that the operation is called only once with the specified details.
     */
    clientToken?: string;
    /**
     * <p>Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>1</code> - Critical impact, this typically relates to full application failure that impacts many to all customers. </p> </li> <li> <p> <code>2</code> - High impact, partial application failure with impact to many customers.</p> </li> <li> <p> <code>3</code> - Medium impact, the application is providing reduced service to customers.</p> </li> <li> <p> <code>4</code> - Low impact, customer might aren't impacted by the problem yet.</p> </li> <li> <p> <code>5</code> - No impact, customers aren't currently impacted but urgent action is needed to avoid impact.</p> </li> </ul>
     */
    impact?: number;
    /**
     * Add related items to the incident for other responders to use. Related items are Amazon Web Services resources, external links, or files uploaded to an Amazon S3 bucket.
     */
    relatedItems?: shared.RelatedItem[];
    /**
     * The Amazon Resource Name (ARN) of the response plan that pre-defines summary, chat channels, Amazon SNS topics, runbooks, title, and impact of the incident.
     */
    responsePlanArn: string;
    /**
     * Provide a title for the incident. Providing a title overwrites the title provided by the response plan.
     */
    title?: string;
    /**
     * Details about what caused the incident to be created in Incident Manager.
     */
    triggerDetails?: StartIncidentRequestBodyTriggerDetails;
}
export declare class StartIncidentRequest extends SpeakeasyBase {
    requestBody: StartIncidentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartIncidentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startIncidentOutput?: shared.StartIncidentOutput;
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
