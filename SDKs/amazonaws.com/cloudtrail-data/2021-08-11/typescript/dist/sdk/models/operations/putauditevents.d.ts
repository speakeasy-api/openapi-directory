import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutAuditEventsRequestBody extends SpeakeasyBase {
    /**
     * The JSON payload of events that you want to ingest. You can also point to the JSON event payload in a file.
     */
    auditEvents: shared.AuditEvent[];
}
export declare class PutAuditEventsRequest extends SpeakeasyBase {
    requestBody: PutAuditEventsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ARN or ID (the ARN suffix) of a channel.
     */
    channelArn: string;
    /**
     * A unique identifier that is conditionally required when the channel's resource policy includes an external ID. This value can be any string, such as a passphrase or account number.
     */
    externalId?: string;
}
export declare class PutAuditEventsResponse extends SpeakeasyBase {
    /**
     * ChannelInsufficientPermission
     */
    channelInsufficientPermission?: any;
    /**
     * ChannelNotFound
     */
    channelNotFound?: any;
    /**
     * ChannelUnsupportedSchema
     */
    channelUnsupportedSchema?: any;
    contentType: string;
    /**
     * DuplicatedAuditEventId
     */
    duplicatedAuditEventId?: any;
    /**
     * InvalidChannelARN
     */
    invalidChannelARN?: any;
    /**
     * Success
     */
    putAuditEventsResponse?: shared.PutAuditEventsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
