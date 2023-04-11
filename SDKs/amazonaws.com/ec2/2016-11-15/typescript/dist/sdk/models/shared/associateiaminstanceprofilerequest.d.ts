import { SpeakeasyBase } from "../../../internal/utils";
import { IamInstanceProfileSpecification } from "./iaminstanceprofilespecification";
export declare class AssociateIamInstanceProfileRequest extends SpeakeasyBase {
    iamInstanceProfile: IamInstanceProfileSpecification;
    instanceId: string;
}
