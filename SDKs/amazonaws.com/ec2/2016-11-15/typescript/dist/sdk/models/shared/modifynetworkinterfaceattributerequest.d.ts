import { SpeakeasyBase } from "../../../internal/utils";
import { EnaSrdSpecification } from "./enasrdspecification";
/**
 * Information about the interface attachment. If modifying the <code>delete on termination</code> attribute, you must specify the ID of the interface attachment.
 */
export declare class ModifyNetworkInterfaceAttributeRequestAttachment extends SpeakeasyBase {
    attachmentId?: string;
    deleteOnTermination?: boolean;
}
/**
 * A description for the network interface.
 */
export declare class ModifyNetworkInterfaceAttributeRequestDescription extends SpeakeasyBase {
    value?: string;
}
/**
 * Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is <code>true</code>, source/destination checks are enabled; otherwise, they are disabled. The default value is <code>true</code>. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.
 */
export declare class ModifyNetworkInterfaceAttributeRequestSourceDestCheck extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Contains the parameters for ModifyNetworkInterfaceAttribute.
 */
export declare class ModifyNetworkInterfaceAttributeRequest extends SpeakeasyBase {
    attachment?: ModifyNetworkInterfaceAttributeRequestAttachment;
    description?: ModifyNetworkInterfaceAttributeRequestDescription;
    dryRun?: boolean;
    enaSrdSpecification?: EnaSrdSpecification;
    groups?: string[];
    networkInterfaceId: string;
    sourceDestCheck?: ModifyNetworkInterfaceAttributeRequestSourceDestCheck;
}
