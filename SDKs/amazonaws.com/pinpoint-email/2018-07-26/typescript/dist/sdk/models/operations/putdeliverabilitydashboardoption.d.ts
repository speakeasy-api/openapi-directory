import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutDeliverabilityDashboardOptionRequestBody extends SpeakeasyBase {
    /**
     * Specifies whether to enable the Deliverability dashboard for your Amazon Pinpoint account. To enable the dashboard, set this value to <code>true</code>.
     */
    dashboardEnabled: boolean;
    /**
     * An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.
     */
    subscribedDomains?: shared.DomainDeliverabilityTrackingOption[];
}
export declare class PutDeliverabilityDashboardOptionRequest extends SpeakeasyBase {
    requestBody: PutDeliverabilityDashboardOptionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutDeliverabilityDashboardOptionResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    putDeliverabilityDashboardOptionResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
