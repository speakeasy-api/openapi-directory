import { SpeakeasyBase } from "../../../internal/utils";
import { IamInstanceProfileSpecification } from "./iaminstanceprofilespecification";
export declare class ReplaceIamInstanceProfileAssociationRequest extends SpeakeasyBase {
    associationId: string;
    iamInstanceProfile: IamInstanceProfileSpecification;
}
