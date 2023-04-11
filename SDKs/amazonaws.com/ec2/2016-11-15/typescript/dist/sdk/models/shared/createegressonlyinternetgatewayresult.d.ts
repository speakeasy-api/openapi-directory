import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the attachment. For an internet gateway, the state is <code>available</code> when attached to a VPC; otherwise, this value is not returned.
 */
export declare enum CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGatewayAttachmentsStateEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached"
}
/**
 * Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.
 */
export declare class CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGatewayAttachments extends SpeakeasyBase {
    state?: CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGatewayAttachmentsStateEnum;
    vpcId?: string;
}
/**
 * Describes a tag.
 */
export declare class CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGatewayTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the egress-only internet gateway.
 */
export declare class CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway extends SpeakeasyBase {
    attachments?: CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGatewayAttachments[];
    egressOnlyInternetGatewayId?: string;
    tags?: CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGatewayTags[];
}
/**
 * Success
 */
export declare class CreateEgressOnlyInternetGatewayResult extends SpeakeasyBase {
    clientToken?: string;
    egressOnlyInternetGateway?: CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway;
}
