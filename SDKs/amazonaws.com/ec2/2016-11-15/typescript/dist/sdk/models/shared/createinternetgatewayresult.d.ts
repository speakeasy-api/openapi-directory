import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the attachment. For an internet gateway, the state is <code>available</code> when attached to a VPC; otherwise, this value is not returned.
 */
export declare enum CreateInternetGatewayResultInternetGatewayAttachmentsStateEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached"
}
/**
 * Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.
 */
export declare class CreateInternetGatewayResultInternetGatewayAttachments extends SpeakeasyBase {
    state?: CreateInternetGatewayResultInternetGatewayAttachmentsStateEnum;
    vpcId?: string;
}
/**
 * Describes a tag.
 */
export declare class CreateInternetGatewayResultInternetGatewayTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the internet gateway.
 */
export declare class CreateInternetGatewayResultInternetGateway extends SpeakeasyBase {
    attachments?: CreateInternetGatewayResultInternetGatewayAttachments[];
    internetGatewayId?: string;
    ownerId?: string;
    tags?: CreateInternetGatewayResultInternetGatewayTags[];
}
/**
 * Success
 */
export declare class CreateInternetGatewayResult extends SpeakeasyBase {
    internetGateway?: CreateInternetGatewayResultInternetGateway;
}
