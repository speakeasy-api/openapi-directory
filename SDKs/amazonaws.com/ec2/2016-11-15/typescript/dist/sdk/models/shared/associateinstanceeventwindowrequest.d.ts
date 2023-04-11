import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceEventWindowAssociationRequest } from "./instanceeventwindowassociationrequest";
export declare class AssociateInstanceEventWindowRequest extends SpeakeasyBase {
    associationTarget: InstanceEventWindowAssociationRequest;
    dryRun?: boolean;
    instanceEventWindowId: string;
}
