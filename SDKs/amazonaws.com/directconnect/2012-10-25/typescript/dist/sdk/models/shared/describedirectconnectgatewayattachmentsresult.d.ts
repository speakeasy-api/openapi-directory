import { SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGatewayAttachment } from "./directconnectgatewayattachment";
/**
 * Success
 */
export declare class DescribeDirectConnectGatewayAttachmentsResult extends SpeakeasyBase {
    directConnectGatewayAttachments?: DirectConnectGatewayAttachment[];
    nextToken?: string;
}
