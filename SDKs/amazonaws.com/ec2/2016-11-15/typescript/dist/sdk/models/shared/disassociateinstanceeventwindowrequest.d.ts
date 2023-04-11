import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceEventWindowDisassociationRequest } from "./instanceeventwindowdisassociationrequest";
export declare class DisassociateInstanceEventWindowRequest extends SpeakeasyBase {
    associationTarget: InstanceEventWindowDisassociationRequest;
    dryRun?: boolean;
    instanceEventWindowId: string;
}
