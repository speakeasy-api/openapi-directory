import { SpeakeasyBase } from "../../../internal/utils";
import { IamIdentity } from "./iamidentity";
/**
 * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
 */
export declare class UserContext extends SpeakeasyBase {
    domainId?: string;
    iamIdentity?: IamIdentity;
    userProfileArn?: string;
    userProfileName?: string;
}
